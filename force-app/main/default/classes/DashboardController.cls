public with sharing class DashboardController {

    @AuraEnabled(cacheable=true)
    public static List<AggregateResult> getOpportunityByStage() {

        return [
            SELECT StageName, COUNT(Id) total
            FROM Opportunity
            GROUP BY StageName
        ];
    }

    @AuraEnabled(cacheable=true)
    public static Decimal getTotalPipelineValue() {

        AggregateResult result = [
            SELECT SUM(Amount) total
            FROM Opportunity
            WHERE IsClosed = false
        ];

        return (Decimal) result.get('total');
    }
}