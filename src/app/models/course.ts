export interface Course {
    Id_Course? : Number;
    Name_Course : string;
    Description_Course : string;
    Id_Teacher_Course : Number;
    Status_Course : boolean;
    Date_Created_Course : Date;
    Date_Updated_Course : Date;
    Id_User_Created : Number;
    Id_User_Updated : Number;
    Entrance_Exam : string;
    Final_Exam : string;
    Id_Final_Exam : Number;
    Id_Entrance_Exam : Number;
}
