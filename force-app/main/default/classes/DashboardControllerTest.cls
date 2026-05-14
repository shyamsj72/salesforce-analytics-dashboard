@isTest
public class DashboardControllerTest {
    @TestSetup
    static void makeData() {
        Opportunity opp = new Opportunity(
            Name = 'Test Deal',
            StageName = 'Prospecting',
            CloseDate = Date.today().addDays(30),
            Amount = 50000
        );
        insert opp;
    }

    @isTest
    static void testGetOpportunityByStage() {
        List<AggregateResult> results =
            DashboardController.getOpportunityByStage();
        System.assertNotEquals(0, results.size());
    }

    @isTest
    static void testGetTotalPipeline() {
        Decimal total = DashboardController.getTotalPipelineValue();
        System.assertNotEquals(null, total);
    }
}