$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
    console.log(data.results[0]);
    let persona = data.results[0];
    var fechaNac = new Date(persona.dob.date);

    //Texto para experiencia
    var ex1 = "<div> <h2>Marketing Assistant at XYZ Corporation</h2> <p>In this role, I was responsible for supporting the marketing team in various activities, including market research, content creation, and event planning.</p> <p>One of my major achievements during this role was creating a comprehensive market research report that helped our team identify new opportunities for growth in the industry. I also collaborated with the team to create engaging social media content and assisted in organizing a successful product launch event.</p> <p>Through this experience, I developed strong project management and communication skills, as well as the ability to work effectively in a team.</p> </div>";
    var ex2 = "<div><h2>Software Developer at XYZ Tech</h2><p>As a Software Developer at XYZ Tech, I worked on various software development projects using languages such as Java, Python, and C++. My role involved designing, developing, and testing software applications for clients.</p><p>One of my major achievements during this role was developing a web application that streamlined the client's business processes, resulting in a 50% increase in efficiency. I also collaborated with a team of developers to develop and deploy a complex software system for a large client.</p><p>Through this experience, I gained expertise in software development methodologies such as Agile and Scrum, as well as strong skills in problem-solving and debugging. Additionally, I honed my ability to work collaboratively with cross-functional teams.</p></div>";
    var ex3 = "<div><h2>Full Stack Web Developer at ABC Startup</h2><p>As a Full Stack Web Developer at ABC Startup, I was responsible for developing and maintaining the company's web application using technologies such as React, Node.js, and MongoDB. My role involved working closely with the product team to understand their requirements and translating them into functional code.</p><p>One of my significant achievements during this role was developing a new feature that significantly improved user engagement and increased user retention by 30%. I also contributed to the development of an e-commerce platform that resulted in a 100% increase in sales revenue.</p><p>Through this experience, I gained expertise in front-end and back-end web development, including building and integrating APIs, implementing security measures, and optimizing website performance. Additionally, I honed my ability to work in a fast-paced startup environment and communicate technical information to non-technical stakeholders.</p></div>";
    const experiencia = [ex1, ex2, ex3];

    //Texto para educación
    var ed1 = "<div><h2>Bachelor's Degree in Computer Science from XYZ University</h2><p>Completed a four-year degree program focused on computer science, programming, and software development</p><p>Gained expertise in programming languages such as Java, C++, and Python, as well as database design and management, algorithms, and data structures.</p></div>";
    var ed2 = "<div><h2>Online Certification in Full Stack Web Development from ABC Platform</h2><p>Completed an online certification program focused on full-stack web development using React, Node.js, and MongoDB</p><p>Gained expertise in building and deploying web applications, working with APIs, and implementing security measures.</p></div>";
    var ed3 = "<div><h2>Master's Degree in Computer Engineering from XYZ University</h2><p>Completed a two-year master's degree program focused on computer engineering, including coursework in computer architecture, advanced programming, and machine learning.</p><p>Gained expertise in designing and implementing complex computer systems, as well as conducting research and developing new technologies.</p></div>";
    const educacion = [ed1, ed2, ed3];

    //Texto para habilidades
    var idioma1 = ["Spanish", "English"];
    var idioma2 = ["German", "Italian", "Portugese"];
    var nivel = ["Basic", "Intermediate", "Advanced"];

    //Texto a imprimir
    document.getElementById("nombre").innerHTML = persona.name.first + " " + persona.name.last;
    document.getElementById("nacimiento").innerHTML = fechaNac.getDate() + "/" + fechaNac.getMonth() + "/" + fechaNac.getFullYear();
    document.getElementById("direccion").innerHTML = persona.location.street.name + " " + persona.location.street.number + ", " + persona.location.city;
    document.getElementById("telefono").innerHTML = persona.phone;
    document.getElementById("correo").innerHTML = persona.email;
    document.getElementById("foto").innerHTML = "<img src='"+persona.picture.large+"' class='circle float-left' alt='...'>";
    document.getElementById("textoex").innerHTML = experiencia[Math.ceil(Math.random()*3)-1];
    document.getElementById("textoed").innerHTML = educacion[Math.ceil(Math.random()*3)-1];
    document.getElementById("textoidioma").innerHTML = "<li>"+ idioma1[Math.ceil(Math.random()*2)-1] +" - Native</li><li>"+ idioma2[Math.ceil(Math.random()*3)-1] +" - "+ nivel[Math.ceil(Math.random()*3)-1] +"</li>";
}
});

$(document).ready(function(){
    $(".nav-tabs a").click(function(){
      $(this).tab('show');
    });
  });