export interface Exam {
    Id_Exam? : Number;
    Title_Exam : string;
    Description_Exam : string;
    State_Exam : string;
    Id_User_Created : Date;
    Id_User_Updated : Date;
    Date_Created : Date;
    Date_Updated : Date;
    Is_Time_Limited : string;
    Time_Limited : Number;
    Is_Weight_Considered: string;
    Weight_Considered : Number;
    Questions_Correct : Number;
    Higher_Score: Number;
    Type_Exam : string;
}
