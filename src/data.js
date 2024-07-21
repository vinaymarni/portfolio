import React from 'react';

// import { java, java8, Javascript, typescript } from './images';

import java from './images/java.jpg';
import java8 from './images/java8.jpg';
import Javascript from './images/javascript.jpg';
import typescript from './images/typescript.jpg';

import angular from './images/angular.jpg';
import react from './images/react.jpg';
import node from './images/node.jpg';
import html from './images/css5.jpg';
import css from './images/css.jpg';
import bootstrap from './images/bootstrap.jpg';

import microservices from './images/microService.jpg';
import springBoot from './images/springBoot.jpg';
import springMVC from './images/springMVC.jpg';
import resilience4j from './images/Resilience4j.png';
import log4 from './images/log4.png';
import restApis from './images/restAPIS.jpg';
import servlet from './images/jsp.png'; ///////// ---------------
import springCloud from './images/springcloud.png';
import oop from './images/oop.png';
import jdb from './images/java.jpg';
import hibernate from './images/hybernate.jpg';
import aop from './images/springAOP.png';
import springData from './images/springdata.png';
import maven from './images/mavin.jpg';

import kubernetes from './images/Kubernetes.jpg';
import jenkins from './images/jinkins.jpg';
import docker from './images/docker.jpg';
import git from './images/git.jpg';
import selenium from './images/Selenium.jpg';
import prometheus from './images/Prometheus.jpg';
import grafana from './images/Grafana.jpg';
import mockito from './images/Mockito.png';

import AWSRDS from './images/AWS RDS.png';
import AWSIAM from './images/AWS IAM.png';
import AWSVPC from './images/AWS VPC.png';
import AWSEKS from './images/AWS EKS.png';
import AWSS3 from './images/AWS S3.png';
import apiGateway from './images/Api Gateway.jpg';
import cloudFront from './images/CloudFront.jpg';

import gitHub from './images/github.jpg';
import VSCode from './images/vscode.jpg';
import eclipse from './images/eclipse.jpg';
import mySQL from './images/mysql.png';
import sts from './images/sts.png';
import postman from './images/postman.jpg';


export const basicDetails = {
    name: "Chiranjiv Kushwah",
    designetion:"Software developer",
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
        name: "RP CLAN",
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
        name: "Revature",
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
        name: "Skill Vertex",
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
};

export const educationDetails = [
    {
        name: "university",
        college: "Madhav Institute of Technology And Science, Gwalior",
        branch: "B.TECH IN COMPUTER SCIENCE AND ENGINEERING",
        passedOut:"July. 2018-July. 2022"
    },
    {
        name: "higher-school",
        college: "Sandipani Academy, Mandleshwar",
        branch: "HIGHER SECONDARY EDUCATION",
        passedOut:"July. 2016-May. 2017"
    },
];

export const skillsDetails = [
    {
        name: "Programming Languages",
        content:"Skilled in multiple programming languages, delivering robust and efficient solutions.",
        technologies:[ 
            {name :"Java", url: java}, 
            {name :"Java 8", url: java8}, 
            {name :"Javascript", url: Javascript}, 
            {name :"Typescript", url: typescript}, 
        ]
    },
    {
        name: "Frontend Language",
        content:"Skilled in frontend languages, creating engaging and responsive user interfaces.",
        technologies:[ 
            {name :"Angular Material", url: angular}, 
            {name :"React", url: react},  
            {name :"Nodejs", url: node},  
            {name :"HTML", url: html},
            {name :"CSS", url: css}, 
            {name :"Bootstrap", url: bootstrap}, 
        ]
    },
    {
        name: "Backend Language",
        content:"Skilled in backend languages, ensuring efficient, reliable server-side solutions.",
        technologies:[ 
            {name :"Microservices", url: microservices}, 
            {name :"Spring boot", url: springBoot}, 
            {name :"Spring MVC ", url: springMVC}, 
            {name :"Resilience4j", url: resilience4j},
            {name :"Log4", url: log4},
            {name :"Rest APIs", url: restApis}, 
            {name :"Servlet", url: servlet}, 
            {name :"Spring Cloud", url: springCloud}, 
            {name :"OOP", url: oop},
            {name :"JDB", url: jdb},
            {name :"Hibernate", url: hibernate}, 
            {name :"AOP", url: aop}, 
            {name :"Spring Data", url: springData}, 
            {name :"Maven", url: maven}, 
        ]
    },
    {
        name: "DevOps and Testing",
        content:"Proficient in DevOps and Testing, optimizing deployments and ensuring quality.",
        technologies:[ 
            {name :"Kubernetes", url: kubernetes}, 
            {name :"Jenkins", url: jenkins}, 
            {name :"Docker", url:docker}, 
            {name :"Git", url: git},
            {name :"Selenium", url: selenium}, 
            {name :"Prometheus", url: prometheus}, 
            {name :"Grafana", url: grafana}, 
            {name :"Mockito", url: mockito}
        ]
    },
    {
        name: "Cloud",
        content:"Skilled in cloud technologies, optimizing deployments and enhancing infrastructure reliability.",
        technologies:[ 
            {name :"AWS RDS", url: AWSRDS}, 
            {name :"AWS IAM", url: AWSIAM},  
            {name :"AWS VPC", url: AWSVPC},  
            {name :"AWS EKS", url: AWSEKS}, 
            {name :"AWS S3", url: AWSS3},
            {name :"Api Gateway", url: apiGateway},
            {name :"Cloud front", url: cloudFront},

        ]
    },
    {
        name: "Frameworks",
        content:"Proficient in diverse frameworks, delivering scalable and maintainable software solutions.",
        technologies:[ 
            {name :"Spring boot", url: springBoot}, 
            {name :"Spring Cloud", url: springCloud}, 
            {name :"Hibernate", url: hibernate}, 
            {name :"Angular", url: angular}
        ]
    },
    {
        name: "Tools and IDEs",
        content:"Experienced with various tools and IDEs for efficient development workflows.",
        technologies:[ 
            {name :"GitHub", url: gitHub}, 
            {name :"VS Code", url: VSCode}, 
            {name :"Eclipse", url: eclipse}, 
            {name :"MySQL", url: mySQL},
            {name :"STS", url: sts}, 
            {name :"Postman", url: postman}, 
        ]
    },
];

export const projectDetails = [
    {
        name:"Get Right Property",
        technologiesUsed: [css, Javascript, html],
        description:"Developed secure real estate site with Java, Spring Boot, React, AWS.",
        link:""
    },
    {
        name:"Rp Clan Internal Application",
        technologiesUsed: [css, Javascript, html],
        description:"Streamlined property listings with efficient data approval system.",
        link:""
    },
    {
        name:"Expense Tracker ",
        technologiesUsed: [css, Javascript, html],
        description:"Streamlined property listings with efficient data approval system.",
        link:""
    },
    {
        name:"Hospital Management System",
        technologiesUsed: [css, Javascript, html],
        description:"Built web app for booking, health records, and management.",
        link:""
    },
    {
        name:"PDF to IMAGE Converter",
        technologiesUsed: [css, Javascript, html],
        description:"Converts PDFs to customizable images in JPEG, JPG, PNG formats; GitHub code available.",
        link:""
    },
    {
        name:"Training Feedback Management System",
        technologiesUsed: [css, Javascript, html],
        description:"Website for managing trainer and trainee information in facility.",
        link:""
    },
    {
        name:"Personal Portfolio Project",
        technologiesUsed: [css, Javascript, html],
        description:"Highlighting my journey, skills, and expertise in development.",
        link:""
    },
];


export const profileDetails = [
    {
        name:"About Me",
        designetion: "I am a Software Developer",
        description:"A passionate Software Developer, I thrive on learning and building innovative solutions. I specialize in infrastructure, containerization, and Serverless/Cloud technologies, driven by a love for programming and community contribution.",
    },
    {
        name :"Experience"
    },
    {
        name :"Skills",
        skills:[
            {
                heading:"Programming Language",
                skills:"Java, Java8, JavaScript, Typescript, HTML, CSS, Node.js"
            },
            {
                heading:"Tools",
                skills:"Maven, JDBC, Log4j, Kubernetes, Jenkins, Docker, Git, Mockito, Selenium, Prometheus, Grafana, AWS (RDS, S3, EC2, IAM, VPC, EKS, API Gateway, CloudFront), GitHub, VS Code, Eclipse, MySQL Workbench, STS, Postman, Auth0"
            },
            {
                heading:"Frameworks",
                skills:"Angular Material, React, Spring Boot, Spring MVC, Spring Cloud (with modules), Hibernate, JSP, Servlet, Resilience4j, Angular"
            },
        ],
    },
    {
        name :"Projects",
        projects:[
            {
                name:"Get Right Property Real Estate Website",
                techStack:"Tech Stack :-Java,Java8,JavaScript, Spring Boot, ReactJs, NextJs, Spring Security, JWT, Solr Search Engine, Spring Data, Spring ORM, AOP, RDS , EC2,S3,CI/CD, Maven",
                description:"Developed a real estate website with Java, Spring Boot, ReactJs, and NextJs. Integrated security using Spring Security and JWT, and efficient search with Solr. Hosted on AWS EC2 with S3 and RDS storage. Implemented CI/CD pipelines using Jenkins and Maven.",
            },
            {
                name:"Rp Clan Internal Application",
                techStack:"Tech Stack :-Java,Java8,JavaScript, Spring Boot, ReactJs, NextJs, Spring Security, JWT, Solr Search Engine, Spring Data, Spring ORM, AOP, RDS , EC2,S3,CI/CD, Maven",
                description:"Developed and implemented an internal data approval system for Get Right Property, streamlining workflows for property listings review and approval. Ensured data accuracy, security, and compliance with protection standards. Utilized modern technologies to automate processes, enhancing efficiency and overall data management.",
            },
            {
                name:"Hospital Management System",
                techStack:`Tech Used: Spring Boot, Microservices, Spring Data, Spring ORM, AOP, AWS(EKS ,RDS , EC2,
                            S3, IAM ,Cloud-front ,Api-gateway), Docker, Jenkins, Angular Material, Bootstrap, CSS, JavaScript,
                            Mockito, Kubernetes, Auth0, Resilience4J, Spring Security, Message Queues, Spring Cloud, GitLab CI/CD, Maven`,
                description:"Developed a web application for patients to book appointments, access health records, receive notifications and enable physicians and nurses to manage and update diagnosis and medication details efficiently.",
            },
            {
                name:"Expense Tracker with Group Splitting",
                techStack:`Tech Used: Spring Boot, Microservices, Spring Data, Spring ORM, AOP, AWS(EKS ,RDS , EC2,
                            S3, IAM ,Cloud-front ,Api-gateway), Docker, Jenkins, Angular Material, Bootstrap, CSS, JavaScript,
                            Mockito, Kubernetes, Auth0, Resilience4J, Spring Security, Message Queues, Spring Cloud, GitLab CI/CD, Maven`,
                description:"Developed a web application for patients to book appointments, access health records, receive notifications and enable physicians and nurses to manage and update diagnosis and medication details efficiently.",
            },
            {
                name:"PDF to IMAGE Converter",
                techStack:`Tech Stack :-Java,Java8,JavaScript, Spring Boot, ReactJs, NextJs, Spring Security, JWT, Solr Search Engine, Spring Data, Spring ORM, AOP, RDS , EC2,S3,CI/CD, Maven`,
                description:"This project converts PDFs into customizable named images, supporting JPEG, JPG, and PNG formats. It offers flexibility and personalization, with source code available on GitHub for implementation insights and functionality customization.",
            },
            {
                name:"Training Feedback Management System",
                techStack:`Tech Stack :-Java, Mysql, JDBC, JUnit, Maven, Eclipse IDE, Servlet, HTML, CSS, JSP.`,
                description:"Website that allows you to add remove update and get information on trainers and trainees who are present in a facility.",
            },
            {
                name:"Personal Portfolio Project",
                techStack:``,
                description:"A showcase of my professional journey, skills, and accomplishments, highlighting projects and experiences in software development and Featuring a collection of works demonstrating expertise skills.",
            },
        ]
    },
    {
        name :"Education",
    },
]