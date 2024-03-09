import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantDetails } from '../models/applicantDetails';
import { Router } from '@angular/router';
import {environment} from '../environment';

@Component({
  selector: 'app-internshipform',
  templateUrl: './internshipform.component.html',
  styleUrls: ['./internshipform.component.css']
})
export class InternshipformComponent implements OnInit{
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  // dateRangeFormGroup!: FormGroup;

  countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  internshipLocations = ["Banglore"];
  geograRegions = ["Africa", "Asia", "Australia and NewZealand", "Europe", "North America", "South America"];
  selectedCountry : string="India";
  selectedInternshipLocation :string = "Banglore";
  selectedUniversity !: string;

  africanUniversities = ["Graduate School of Business(University of Cape Town)", "University of Mauritious", "Other University"];
  asianUniversities = ["A", "B", "C"];
  australiaAndNewZealandUniversities = ["A", "B", "C"];
  europeUniversities = ["D", "E", "F"];
  northAmericaUniversities = ["G", "H", "I"];
  southAmericanUniversities = ["J", "K", "L"];
  academicLevels = ["Bachelors", "Masters", "MBA", "Ph.D"];
  filteredAcademicYears = ["1", "2", "3"];
  areaOfInterests = [
    "Adobe Photoshop",
    "Adoption of Agile in SAP Application Eco System",
    "Adoption of private or public cloud in europe and north ...",
    "Advanced AI",
    "Advanced Engineering",
    "AI and ML",
    "AI or ML",
    "AI or ML Blockchain Java or Nodejs and reactjs or angul ...",
    "AI, Information Retrieval and NLP",
    "AI, Machine Learning, IOT and Blockchain",
    "AI, Machine Learning, Social Network Analysis",
    "Analysis of Time Series Data",
    "Analytical & scripting",
    "analytics",
    "Analytics and Python",
    "Analytics, Data Alogrithms",
    "Android, IOS programming, LBS, C++, Java",
    "Angular JS, Java, HTML5,Groovy,Shell Scripting",
    "Angular, HTML, CSS, Azure, Java, Spring Boot, Micro ser ...",
    "Apache Superset JavaScript",
    "API, Java, Python, C++",
    "App development",
    "Applied machematics Internet of Things Data science clo ...",
    "AR VR MR",
    "AR/VR",
    "Artificial inteligence",
    "Artificial Intellegence, Machine Learning, Deep Learnin ...",
    "Artificial Intelligence",
    "Artificial Intelligence and Machine Learning",
    "Artificial Intelligence, Machine learning",
    "Artificial Intelligence, machine learning",
    "Artificial Intelligence, machine learning, NLP",
    "Augmented reality and Virtual reality",
    "Augmented Reality, Virtual reality",
    "Automation and AI: RPA or ML depending on the solution",
    "Automation, AI",
    "Automation, DevOps",
    "Automation, RPA",
    "Automation,AI",
    "AWS Azure GCP",
    "AWS, Jenkins, Ansible, Shell scripting, UI skills",
    "Azure Cloud, Basics of React.JS ,Node.JS or Java ortri ...",
    "Azure, IOT , SDK",
    "B Tech equivalent or higher",
    "BI tools, DevOps",
    "Big Data and Data Science",
    "Big data, machine learning, artificial intelligence",
    "Blockchain",
    "Blockchain Triparty collateral management",
    "Blockchain, Data Security",
    "Blue Prism, Oracle Order Management",
    "Branding and Communications Media",
    "BTech or M Tech or PhD",
    "Building Machine Learning model for Fraud Detection",
    "Business",
    "Business analysis, Interviewing and Research",
    "Business analysis, market analysis, competitor analysis",
    "C#, D365, PowerApps",
    "Chatbot",
    "Choose any suitable technology (OSS/ Azure / AWS etc.) ...",
    "Cloud SAAS App",
    "Cloud, Java, C++",
    "Communication Networking and Social Media",
    "Comparitive analysis",
    "Competition Analysis",
    "Computer vision, Artificial Intelligence, machine learn ...",
    "Conversational UI in banking using AWS and Asure",
    "Cybersecurity",
    "D3 Angular Java HTML",
    "Data Analysis",
    "Data Analytics",
    "Data Analytics and Artificial Intelligence",
    "Data analytics, any Machine learning algorithm, Java or ...",
    "Data and Analytics",
    "Data and Analytics solution integration",
    "Data evaluation and campaign building",
    "Data Governance",
    "Data Science and Product Development",
    "Data Science and revenue management",
    "Data Science, AI and Machine Learning",
    "Data Science, Social Graph",
    "Data Science, Social network analysis and Visualization",
    "Data Transformation",
    "Database like MongoDB, CouchBase, Cassandra",
    "Database, Java, Jquery Ajax",
    "DBs and UI tools",
    "Declarative provisioning, Model-driven Orchestration, T ...",
    "Deep Learning, Machine Learning, NLP, Python",
    "Deep Learning, Machine Learning, Tensorflow, Python",
    "Deep Learning, Tensorflow",
    "Devops Framework",
    "DeVops Tools",
    "DevOps, Java, Spring, Performance Engineering",
    "DevOps, Machine Learning",
    "Digital Process automation",
    "Digtial Marketing",
    "Domain Ontology Extraction",
    "Energy resources",
    "Experience in Insurance, Healthcare or LifeSciences dom ...",
    "Exposure to ERP MS Office",
    "familiarity with various data visualization tools",
    "Finance",
    "Finance, Object DBs & UI tools",
    "Financial Banking Standards Regulations",
    "Fintech, Digital Banking,Payments",
    "Full Stack Development",
    "Global Command Centre for Data and Analytics",
    "Good understanding of DL concepts",
    "Good understanding of information retrieval and ML conc ...",
    "GPS,IOT",
    "Graduate or Masters in Human Resource Humanities",
    "Graphic design",
    "Graphic Designing",
    "Hana,ABAP",
    "Healthcare",
    "Healthcare, Sales, Marketing",
    "Heathcare",
    "Hyperledger Fabric or Etherum, smart contracts (Java or ...",
    "Industrial Engineering",
    "Industry Research",
    "Information Technology",
    "Information Technology, IOT",
    "Infosys Foundation USA",
    "Interpersonal and communication skills",
    "IOS and Android App Development including HTML5, CSS3",
    "IOT",
    "IOT Core",
    "IOT, Cybersecruity",
    "IOT, Data Science, Image Analytics",
    "IOT,Blockchain",
    "IT experience in ADM",
    "Java ,Python",
    "Java Datascience Machine Learning",
    "Java Spring framework Openshift Elastic Jenkins",
    "Java UI development, SQL,PLSQL, Java programming, appli ...",
    "Java, android",
    "Java, C++",
    "Java, C++ and security",
    "Java, J2EE",
    "Java, Python",
    "Java, Python, C++,DevOps",
    "Java, Python, C++,OOPs",
    "Java, scala",
    "Java, Python, Machine Learning, Web  development",
    "Kafka, Streamlio, DropWizard",
    "Knowledge of Python programming",
    "Knowledge of Python programming ML OpenCVTensorFlow",
    "Knowledge on Azure Apps and functions",
    "Knowledge on pythonR",
    "Kubernetes orchestration and network security",
    "Law",
    "Legal",
    "Linux, Docker",
    "M A of Digital firms Business strategy formulation for ...",
    "Machine Learning",
    "Machine Learning and Deep learning",
    "Machine Learning and Natural Language Processing",
    "Machine Learning, API",
    "Machine Learning, Artificial Intelligence",
    "Machine Learning, Artificial Intelligence,Chatbot",
    "Machine Learning, Deep Learning, API",
    "Machine Learning, Fintech",
    "Machine Learning, Statistics and Forecasting",
    "Machine Learning, TensorFlow, Python",
    "Machine Learning,Artifical Intelligence",
    "Machine Learning,NLP",
    "MAF and ADF Frameworks",
    "Management, MBA",
    "Manufacturing Execution System (MES),Rockwell and Dassa ...",
    "Market analysis and Research",
    "Market Research",
    "Market Research Analysis",
    "Market Research Analytics Sustainability EHS Background",
    "Market Research and Asset Management",
    "Market Research and Competitive analysis",
    "Market Research, Basic knowledge on Block Chain",
    "Market Research, ERP System",
    "Market Research, Marketing",
    "Market Research, MBA",
    "Marketing",
    "Marketing and Branding",
    "Marketing, Sales",
    "Marketing,Innovation Management",
    "MBA program with Marketing as a specialization",
    "MBA with Marketing focus",
    "Mechanical and Electronics Harware design",
    "Microservice Discovery",
    "ML, AI, Cyber security",
    "ML, AI, OCR, NLP",
    "Mobile – Appium",
    "Mobile Development, Python, NLP, Java",
    "MS Phd Computer Science",
    "Multiple or diverse blockchain platforms like corda eth ...",
    "Network Security, Java",
    "Neuroscience background, BCI",
    "NLP",
    "NLP, Machine learning, Artificial Intelligence",
    "NLP, Machine Learning, TensorFlow, PyTorch, Python",
    "NLP, MMS",
    "OBR Testing",
    "Open Source",
    "Open Source data integration",
    "Optical Character Recognition, NLP",
    "Oracle and VB scripts",
    "Oracle CX & RPA",
    "Oracle Work In Process (Understanding), Warehouse Solut ...",
    "Oracle,SQL",
    "PL/SQL",
    "PLM",
    "Plsql",
    "plsql to ansi sql using machine learning",
    "Post graduate Business management",
    "Post Graduate statistics",
    "Predictive Analytics",
    "Pricing Models",
    "Process Improvement and Optimization",
    "Python Neo4J",
    "Python, AI/ML Basics",
    "Python, Java or C#",
    "Python, Java, .Net, Open CV",
    "Python, Java, AI and ML",
    "Python, Java, C++",
    "Python, Machine Learning, C++",
    "Python, PySpark, Machine Learning Basics",
    "Python, SQL, Cassandra/Mongo, Machine Learning",
    "Qualitative Market research MS Office Secondary and onl ...",
    "RDBMS Platform",
    "React, core JAVA, Spring, Springboot, Hibernate",
    "ReactJS HTML CSS CDN knowledge Web socket Web Service M ...",
    "Release Management",
    "Research on various pricing Models",
    "Research, Analysis, Collate and Present data",
    "Research, CSR",
    "Research, documentation",
    "Research,documentation",
    "Research,Information Technology",
    "Retail",
    "Robotics",
    "RPA",
    "SAP",
    "SAP Ariba",
    "Scala, Spark, C++",
    "Service Mesh Implementation",
    "Smart view, Essbase",
    "Social Media, Marketing",
    "Software Engineering",
    "Statistics MS Office advance excel Knowledge of any pro ...",
    "Strategy or marketing",
    "Supply Chain management",
    "Systems Technology Majors",
    "Technology understanding, ppt, good communication, Anal ...",
    "Test Automation",
    "Text mining and Machine Learning",
    "Thingworx, Java Script",
    "Thingworx, Java Script, SQL Server, HTML5, CSS",
    "UI Design, ASP .net , Rest API ,Postgres database ,Azur ...",
    "UI/UX design, Oracle SQL, functional documentation, wir ...",
    "Understanding of Digital Experience landscape Digital S ...",
    "Understanding of Digital marketing *",
    "understanding of MS Excel PPT and most importantly abil ...",
    "Understanding of the manufacturing business domain",
    "Unity Csharp and gaming dev skills",
    "Ux design principles for both Web and Mobile",
    "Virtual Reality",
    "Visio, MS Word, MS Excel,Banking"];

  filteredUniversities = [];


  applicant !: ApplicantDetails;

  formGroup !: FormGroup;

  get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }

  constructor(private fb: FormBuilder, private http : HttpClient, private router: Router) { }
  ngOnInit(): void {

    this.formGroup = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          firstName: ['', [Validators.required]],
          lastName: ['', [Validators.required]],
          emailId: ['', [Validators.required, Validators.email]],
          alternateEmail: ['', [Validators.email]],
          mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
          alternateMobile: ['', [Validators.minLength(10), Validators.maxLength(10)]],
          workAuthCountry: ['India', [Validators.required]],
          internshipLocation: ['Banglore', [Validators.required]]
        }),
        this.fb.group({
          geoRegion: ['', [Validators.required]],
          academicLevel: ['', [Validators.required]],
          academicYear: ['', [Validators.required]],
          cgpa: ['10', [Validators.required]],
          academicConcentration: ['', [Validators.required]],
          expectedGraduationDate: ['', [Validators.required]],
          keySkills: ['', [Validators.required]]
        }),
        this.fb.group({
          areaOfInterest: ['', [Validators.required]],
          projectPreference: ['', [Validators.required]],
          whenCanYouInternWithUsDateRange: ['', [Validators.required]],
          dateRangeFormGroup : this.fb.group({
            start:['', [Validators.required]],
            end:['', [Validators.required]]
          })
        }),
      ])
    });
    // throw new Error('Method not implemented.');
    // this.firstFormGroup = this.fb.group({
    //   firstName: ['', [Validators.required]],
    //   lastName: ['', [Validators.required]],
    //   emailId: ['', [Validators.required, Validators.email]],
    //   alternateEmail: ['', [Validators.email]],
    //   mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    //   alternateMobile: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    //   workAuthCountry: ['India', [Validators.required]],
    //   internshipLocation: ['Banglore', [Validators.required]]
    // });

    // this.secondFormGroup = this.fb.group({
    //   geoRegion: ['', [Validators.required]],
    //   academicLevel: ['', [Validators.required]],
    //   academicYear: ['', [Validators.required]],
    //   cgpa: ['10', [Validators.required]],
    //   academicConcentration: ['', [Validators.required]],
    //   expectedGraduationDate: ['', [Validators.required]],
    //   keySkills: ['', [Validators.required]]
    // });

    // this.thirdFormGroup = this.fb.group({
    //   areaOfInterest: ['', [Validators.required]],
    //   projectPreference: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(3)]],
    //   whenCanYouInternWithUsDateRange: ['', [Validators.required]],
    //   dateRangeFormGroup : this.fb.group({
    //     start:['', [Validators.required]],
    //     end:['', [Validators.required]]
    //   })
    //   // resume: [null, [Validators.required]],
    //   // coverLetter: [null, [Validators.required]]
    // });
    
  }

  submitForm(){
    this.applicant = new ApplicantDetails();
    this.applicant.name = this.formArray?.get([0])?.value.firstName + " "+ this.formArray?.get([0])?.value.lastName;
    this.applicant.emailId = this.formArray?.get([0])?.value.emailId;
    this.applicant.alternateEmail = this.formArray?.get([0])?.value.alternateEmail;
    this.applicant.mobile = this.formArray?.get([0])?.value.mobile;
    this.applicant.alternateMobile = this.formArray?.get([0])?.value.alternateMobile;
    this.applicant.workAuthCountry = this.formArray?.get([0])?.value.workAuthCountry;
    this.applicant.internshipLocation = this.formArray?.get([0])?.value.internshipLocation;
    this.applicant.geoRegion = this.formArray?.get([1])?.value.geoRegion;
    this.applicant.academicLevel = this.formArray?.get([1])?.value.academicLevel;
    this.applicant.academicYear = this.formArray?.get([1])?.value.academicYear;
    this.applicant.cgpa = this.formArray?.get([1])?.value.cgpa;
    this.applicant.academicConcentration = this.formArray?.get([1])?.value.academicConcentration;
    this.applicant.expectedGraduationDate = this.formArray?.get([1])?.value.expectedGraduationDate;
    this.applicant.keySkills = this.formArray?.get([1])?.value.keySkills;
    this.applicant.areaOfInterest = this.formArray?.get([2])?.value.areaOfInterest[0];
    this.applicant.projectPreference = this.formArray?.get([2])?.value.projectPreference[0];
    

    this.http.post<ApplicantDetails>(environment.apiUrl + '/instep/candidates', this.applicant).subscribe((response)=>{
      console.log('candidate added !');
      this.router.navigate(['/candidateAddedSuccess']);
  },
  (errorResponse) => {
    console.log(errorResponse);
    this.router.navigate(['/candidateAddedSuccess']);
  });
  }
}
