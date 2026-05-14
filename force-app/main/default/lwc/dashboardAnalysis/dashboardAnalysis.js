import { LightningElement, wire, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';

import getOpportunityByStage from '@salesforce/apex/DashboardController.getOpportunityByStage';
import getTotalPipelineValue from '@salesforce/apex/DashboardController.getTotalPipelineValue';

import CHARTJS from '@salesforce/resourceUrl/chartjs';

export default class SalesDashboard extends LightningElement {
    @track pipelineValue = 0;
    @track opportunityCount = 0;
    chartInitialised = false;

    @wire(getTotalPipelineValue)
    wiredPipeline({ data }) {
        if (data) this.pipelineValue = data.toLocaleString('en-IN');
    }

    @wire(getOpportunityByStage)
    wiredStages({ data }) {
        if (data && this.chartInitialised) {
            this.opportunityCount = data.reduce(
                (sum, r) => sum + r.total, 0
            );
            this.renderChart(data);
        }
    }

    renderedCallback() {
        if (this.chartInitialised) return;
        loadScript(this, CHARTJS)
            .then(() => { this.chartInitialised = true; })
            .catch(e => console.error('Chart.js load error', e));
    }

    renderChart(data) {
        const ctx = this.refs.chartCanvas.getContext('2d');
        new window.Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(r => r.StageName),
                datasets: [{
                    label: 'Opportunities',
                    data: data.map(r => r.total),
                    backgroundColor: '#378ADD'
                }]
            },
            options: { responsive: true }
        });
    }
}
