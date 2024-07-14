export const basicDetails = {
    name: "Chiranjiv Kushwah",
    profileImage: null,
    workingRoles: ['Software', 'Web', 'Java Full-Stack'],
    careerObjective:"A passionate Software Developer, I thrive on learning and building innovative solutions. I specialize in infrastructure, containerization, and Serverless/Cloud technologies, driven by a love for programming and community contribution.",
    resume:null,
    mobile:"8962311939",
    email:"kushwahjick@gmail.com",
    github:"",
    linkedin:"",
    leetcode:"",
}

export const companyDetails = [
    {
        companyName: "RP CLAN",
        logo:"",
        joinDate: "Dec 2022- May 2023",
        role: "SOFTWARE  DEVELOPER",
        keyPoints:[
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
        ],
    },
    {
        companyName: "Revature",
        logo:"",
        joinDate: "Dec 2022- May 2023",
        role: "JAVA FULL STACK DEVELOPER",
        keyPoints:[
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
        ],
    },
    {
        companyName: "Skill Vertex",
        logo:"",
        joinDate: "Dec 2022- May 2023",
        role: "WEB  DEVELOPER",
        keyPoints:[
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
            "Led the development of two innovative projects, responsible for architecture, design, and implementation",
        ],
    },
];

export const srollIntoView = (id) => {
    setTimeout(()=>{
        const element = document.getElementById(id);
        if(element){
            element.scrollIntoView();
        }
    },100);
}