import { useState } from "react"






type StudentType = {
    no: string,
    name: string,
    rollNo: number,
    studentClass: string,
    batchNo: string,
}

const StudentsList = () => {

    // const [userName, setUserName] = useState<string>("Naveed")
    // // setUserName("ALi")

    // var userName1: string = "Naveed"
    // userName1 = "ALi"

    const [students, setStudents] = useState<StudentType[]>([{
        no: "01",
        name: "Naveed",
        rollNo: 23421,
        studentClass: "Mad",
        batchNo: "01"
    }, {
        no: "02",
        name: "Ali",
        rollNo: 23410,
        studentClass: "Mad",
        batchNo: "01"
    },
    {
        no: "03",
        name: "Zain",
        rollNo: 92342,
        studentClass: "Mad",
        batchNo: "01"
    },
    ]
    )
    // const data = {
    //     no: "01",
    //     name:"Naveed",
    //     rollNo: 23421,
    //     studentClass: "Mad",
    //     batchNo: "01"
    // }

    // const data1 = {
    //     no: "02",
    //     name:"Ali",
    //     rollNo: 23410,
    //     studentClass: "Mad",
    //     batchNo: "01"
    // }   

    //     const students:StudentType[] = [{
    //         no: "01",
    //         name: "Naveed",
    //         rollNo: 23421,
    //         studentClass: "Mad",
    //         batchNo: "01"
    //     }, {
    //         no: "02",
    //         name: "Ali",
    //         rollNo: 23410,
    //         studentClass: "Mad",
    //         batchNo: "01"
    //     },
    //      {
    //         no: "03",
    //         name: "Zain",
    //         rollNo: 92342,
    //         studentClass: "Mad",
    //         batchNo: "01"
    //     },
    // ]


    const addStudentInList = () => {
        const newStudent: StudentType = {
            no: "08",
            name: "Muhammad",
            rollNo: 2342,
            studentClass: "Web and Mobile",
            batchNo: "05"
        }
     

        // const newList:StudentType[] = [...students, newStudent] 

        setStudents([...students, newStudent])
        // students.push({
        //     no: "10",
        //     name: "New Student",
        //     rollNo: 92342,
        //     studentClass: "Mad",
        //     batchNo: "01"
        // })
    }




    return (
        <div>
            <h1>Students List</h1>
            <table>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Roll No.</th>
                    <th>Class</th>
                    <th>Batch</th>

                </tr>

                {
                    students.map((student) => {
                        return (
                            <tr>
                                <td>{student.no}</td>
                                <td>{student.name}</td>
                                <td>{student.rollNo}</td>
                                <td>{student.studentClass}</td>
                                <td>{student.batchNo}</td>
                            </tr>
                        )
                    })
                }



                {/* <tr>
               <td>{students[0].no}</td>
               <td>{students[0].name}</td>
               <td>{students[0].rollNo}</td>
               <td>{students[0].studentClass}</td>
               <td>{students[0].batchNo}</td>
            </tr>


            <tr>
               <td>{students[1].no}</td>
               <td>{students[1].name}</td>
               <td>{students[1].rollNo}</td>
               <td>{students[1].studentClass}</td>
               <td>{students[1].batchNo}</td>
            </tr>


            <tr>
               <td>{students[2].no}</td>
               <td>{students[2].name}</td>
               <td>{students[2].rollNo}</td>
               <td>{students[2].studentClass}</td>
               <td>{students[2].batchNo}</td>
            </tr> */}

            </table>

            <button onClick={addStudentInList} >Add Student</button>
        </div>
    )
}

export default StudentsList