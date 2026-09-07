public with sharing class caseComp {

    @AuraEnabled(cacheable=true)
    public static list<account> accountmethod() {
        list<account> ac = [select Name,Industry,Id from Account];
        return ac;
    }
// Hello to Git 

    @AuraEnabled
    public static string casemethod(string sta , string pri ,string ori, string sub){
        case cx = new case();
        cx.Status = sta;
        cx.Priority = pri;
        cx.Origin = ori;
        cx.Subject = sub; 

        insert cx;
         return 'Case Created Successfully';
    }
}