# school-management

### Project Requirements

- Create a login screen.

- After logging in the student list will appear with filters(name, subject) and
add/edit/view/delete

- While adding a student with the student and subject combination that
already exists in the database then include the marks in existing marks.
otherwise, it will create a new student record.

- Student data will appear separately as per the logged-in user


## APPROACH 

### MODELS

- TEACHER MODEL
```yaml
{ 
    name: { type: String, trim: true },
    email: { type: String, trim: true,unique:true,lowercase:true,required:true },
    password: { type: String,required:true,min:6,max:18 },
    isDeleted:{type:Boolean,default:false}
    { timestamps: true }
}
```

- STUDENT MODEL
```yaml
{ 
     name:{ type: String, trim: true,lowercase:true },
     subject:{
      Maths:  { type: Number, trim: true,lowercase:true,default:0},
      Physics:  { type: Number, trim: true,lowercase:true,default:0 },
      Chemistry:  { type: Number, trim: true,lowercase:true,default:0 }
     },
      isDeleted:{type:Boolean,default:false},
      teacherId:{type:ObjectId,required:true}

      { timestamps: true });
}
```

### POST /register/teacher 
- FOR REGISTERING USER WITH EMAIL AND PASSWORD 
- Encrypted the password using Bcrypt



### POST /login/teacher
- LOGIN USER WITH EMAIL AND PASSWORD
- On successful Login generated JWT  token with expiry time



### POST /:teacherId/studentDetails/create
- FOR REGISTERING STUDENT 
- provided key that has reference to Teacher id to get data according to login teacher 



### PUT /:teacherId/studentDetails/update/:studentId
- FOR UPDATING THE STUDENT DATA
-  Performed Authentication and Authorization


### DELETE /:teacherId/studentDetails/delete/:studentId
- TO DELETE STUDENT 
- Used isDeleted Key to retain data rather erasing it 



### GET /:teacherId/studentDetails/get
- To GET LIST OF ALL STUDENT 
- Also Search By Student Name


## assumptions


## Admin API 
- has access to add crop ,property


## User API
- it has access to get all the data 
- select the crops according to their choice
- can update field history 



1.region
2.property
3.fields