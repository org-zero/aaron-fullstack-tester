import React from 'react';
//import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';






const Portfolio = () => {

  //const dev = "© Developer Fullstack & Tester Middle ™" ;
  let Text_1 = "Your Welcome"; let Text_2 = "Hack";
  let text = `${Text_1}, ${Text_2}!`;
  const About = ["Fullstack Developer", "Expert IT", "Ethical Hacker"];
  
  
  

  
  return <div>

         
          
  <div className="contenedor">
        <div className="menu-lateral">
          <img src="https://aaron-fullstack.vercel.app/img/lemua.png" alt="anonymus" className='imgs' />
            <ul>
              <h6>I am an experienced full-stack developer and skilled pentester. <br /><br />
                 With a strong background in both front-end and back-end technologies, 
                 I create robust and user-friendly applications. <br /><br /> My expertise in penetration testing enhances my ability to ensure the security and reliability of the software solutions I develop.</h6>
                
<a href="#openModal1" className='button1'> Payment Methods</a>
<div id="openModal1" className="modalDialog">
<div>
    <a href="#close" title="Close" className="close">X</a>
    <h2>Hello dude!</h2>
   <p>In conducting transactions, I offer a diverse array of payment methods to ensure convenience and flexibility for my clients. Whether you prefer the cutting-edge efficiency of Bitcoin, the widespread accessibility of PayPal, the traditional reliability of bank transfers, or the swift ease of SINPE Móvil, I am equipped to accommodate your payment preferences. With Bitcoin, I leverage the decentralized power of cryptocurrency to facilitate secure and borderless transactions. PayPal provides a seamless and globally recognized platform for swift digital payments. For those who value established methods, bank transfers offer a trusted route for financial interactions. Moreover, SINPE Móvil enables quick and hassle-free local transactions, catering to the needs of clients within the region. Your convenience and security are my utmost priorities, and I am committed to facilitating transactions through the methods that align best with your preferences.</p>
   </div>
</div>
<br />
<a href="#openModal2" className='button2'>Projects of work</a>
<div id="openModal2" className="modalDialog">
<div>
    <a href="#close" title="Close" class="close">X</a>
    <h2>My experince such as Freelancer</h2>
    <p>As a freelance developer, I have a robust track record of providing expert support in various facets of web development. I specialize in crafting engaging and user-friendly blogs, setting up effective e-commerce platforms, and designing eye-catching landing pages. My proficiency extends to creating automated scripts for streamlined processes. Additionally, I possess comprehensive skills in both front-end and back-end development, ensuring a seamless and holistic approach to web projects.    </p>
</div>
</div>                            
</ul>
</div>

<div className="contenido">       
<div className="header"></div>
<div className="row">
  <div className="side">
    <h2>About Me & My Skills like a Fullstack Developer </h2>
    <h5>Languages & Frameworks, I that`s use for woking:</h5>
    <div className="fakeimg" > <p>Javascript : Node &rarr; React &rarr; Next & Express</p> 
    <img src="https://wallpapercave.com/wp/wp2465898.png" alt="img" className='imgs' /></div> <br />
    <div className="fakeimg" > <p>Python : Dj jango</p><img src="https://wallpaperaccess.com/full/796849.jpg" alt="img" className='imgs' /></div> <br />
    <div className="fakeimg" > <p>Java : Sprintboot</p><img src="https://cdn.wallpapersafari.com/89/85/2rZciQ.png" alt="img" className='imgs' /></div> <br />
      <p>I build things for the web.
      I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. <br /><br />
      Currently, I’m focused on building accessible, human-centered products at Upstatement..</p>
    <h3>Databases Knowledge </h3>
    <p>I work with Mysql for validate users and other topics</p>
    <div className="fakeimg" >Mysql</div><br/>
    <div className="fakeimg" ><img src="https://solocodigoweb.com/wp-content/uploads/2014/03/cronologia-historia-de-mysql-cloud-computing-solocodigoweb.jpg" alt="imgs" className='imgs' /></div><br/>
  </div>

  <div className="main">
    <h2>About me such as specialist cybersecurity and Ethical Hacker Certificate</h2>
    <h5>Skills and that tools  i use for work</h5>

<div className="terminal"> 
  <div className="terminal-header">
    <span className="terminal-header-button terminal-header-button-close"></span>
    <span className="terminal-header-button terminal-header-button-minimize"></span>
    <span className="terminal-header-button terminal-header-button-expand"></span>
  </div>
  <div className="terminal-body"> 
 <p>I am an experienced IT professional with a strong passion for technology and problem-solving. <br /><br />
With several years of hands-on experience in the IT industry, I have developed a comprehensive skill set that allows me to tackle various challenges in the world of Information Technology.
<br /><br />
My expertise lies in the design, implementation, and maintenance of IT systems, both hardware and software.
<br /><br />
I am well-versed in troubleshooting technical issues and providing efficient solutions to ensure smooth operations for businesses and individuals.</p>
 <br />
 Comunnicate with me
"I invite you to connect with me through my portfolio website, where refined aesthetics and visionary creativity converge, igniting possibilities for exceptional collaborations."
 <p>Apart from my technical skills, I am an excellent communicator, capable of conveying complex 
      technical concepts in a clear and concise manner. <br /><br /> This skill is valuable when collaborating with cross-functional teams, end-users, and stakeholders to understand their needs and provide the best IT solutions.</p>

</div>
</div>
 <h2>Like a forensic analyst</h2>
    <h5>&rarr; Forensics  </h5>
    <div className="fakeimg">As a dedicated and skilled digital forensic analyst, I bring a meticulous approach to unraveling
     the intricate web of digital evidence. <br /><br /> With a keen eye for detail and a commitment to accuracy, 
     I specialize in dissecting digital footprints to reconstruct events, resolve cyber incidents, 
     and support informed decision-making. <br /><br /> Armed with the latest tools and methodologies,
      I am passionate about untangling the complex threads of cyber incidents, ensuring that 
      the truth prevails in the ever-evolving landscape of digital complexities. <br /><br /> My journey as a digital forensic analyst is driven by an unwavering pursuit of justice in the digital realm, making sense of the virtual trails left behind and contributing to a safer and more secure digital world.</div>
  
    <h5>Kernels that I use to work</h5> 
   <div className="fakeimg" >Kali Linux <br /><br /> <img src="https://cdn.wallpapersafari.com/51/22/R83Ggw.jpg" alt="imgs" className='imgs' /></div><br/>
    <div className="fakeimg" >Parrot OS <br /><br /> <img src="https://w0.peakpx.com/wallpaper/468/927/HD-wallpaper-parrot-os-parrot-security.jpg" alt="imgs" className='imgs' /></div><br/>
    </div>
</div>

<br /><br />
<div className="grid_2">
  <article className="main_2">
    <h1>Facebook Channel</h1>
    <p>
    My Facebook channel dedicated to ethical hacking is a cybersecurity haven, where I share insightful tutorials, cutting-edge tools, and responsible hacking techniques. It's a community of like-minded individuals passionate about safeguarding digital landscapes. Join us in exploring the fascinating world of ethical hacking and enhancing our collective cybersecurity knowledge. Together, we strive to make the online realm a safer place for everyone.
    </p>
    <div class="button-container">
        <a href='https://www.facebook.com/profile.php?id=61550844517506&is_tour_dismissed=true' className="jumping-button">Go to Channel of Facebook</a>
    </div>
  </article>
  <section className="side_2">
    <h1>Youtube Channel</h1>
    <p>
    On my YouTube channel devoted to ethical hacking, I delve into the realm of cybersecurity with informative tutorials, real-world hacking scenarios, and ethical hacking practices. Join me on this educational journey as we navigate through the digital security landscape, learning to protect systems and networks responsibly. Together, we'll empower individuals with the knowledge and skills needed to defend against cyber threats and ensure a safer online world for all.    </p>
    <div className="button-container">
        <a href='https://www.youtube.com/channel/UCR8nRXZzJMtb0j7TjtT8ltA' className="jumping-button_1">Go to Channel of Youtube</a>
    </div>
  </section>
</div>

<div className='projects'><br /> <em className='projects_1'> <i className='fa fa-laptop'></i> My Projects</em></div>

<br /><br /><br />

<div className="card">
        <img src="https://icon-library.com/images/icon-hacker/icon-hacker-12.jpg" alt=""/>
        <h2>Framework of Hacking</h2>
        <div className="cont">
            <p>My hacking framework revolves around five key principles: thorough documentation, in-depth research, continuous hands-on practice, active participation in forums and communities, and unwavering ethics. I kick off each project with meticulous research to understand the target thoroughly and identify potential vulnerabilities. Next, I dive into relevant documentation, leveraging resources like manuals, tutorials, and books to expand my knowledge base. Continuous practice is paramount, enabling me to hone my technical skills and develop new attack and defense techniques. Additionally, engaging in forums and community interactions provides valuable shared insights and feedback. Lastly, I always maintain a strong ethical stance, steering clear of any illegal activities and acting in the best interest of online security. This comprehensive approach allows me to effectively and responsibly tackle cybersecurity challenges.</p>
         <div class="button-container">
        </div>
        </div>
    </div>
    
    <br /><br /><br />

    <div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/57/57589.png" alt=""/>
        <h2>Online Store ( Ecommerce )</h2>
        <div className="cont">
            <p>My ongoing project, an e-commerce platform for computer products, is set to revolutionize the digital marketplace. This innovative tool will provide customers with a seamless shopping experience for a wide range of tech products. With a user-friendly interface and intuitive navigation, it aims to simplify the process of finding and purchasing computer hardware and software. The platform will feature robust search and recommendation algorithms to assist customers in making informed choices. Security will be a top priority, ensuring safe transactions and data protection. Stay tuned for an e-commerce solution that caters specifically to the needs of tech enthusiasts and professionals alike.</p>
            <div class="button-container">
        </div>
        </div>
    </div>

    <br /><br /><br />

<div className="card">
<img src="https://cdn.jim-nielsen.com/ios/512/weather-2021-12-07.png" alt=""/>
        <h2>App Weather</h2>
        <div className="cont"> 
            <p>App Weather is a user-friendly and reliable weather application that provides real-time weather information and forecasts at your fingertips. With a sleek and intuitive interface, users can easily access current weather conditions, hourly and daily forecasts, as well as crucial meteorological data such as temperature, humidity, wind speed, and precipitation. Whether you're planning a weekend getaway or simply want to stay informed about local weather patterns, Apply Weather offers accurate and up-to-date information, making it your go-to choice for all things weather-related. Say goodbye to unexpected weather surprises and stay prepared with Apply Weather today!  </p>
        <div class="button-container">
           <a href='https://weather-14.netlify.app/' className="jumping-button">Go to Channel of Facebook</a>
        </div>
        </div>
    </div>

    <br /><br /><br />

<div className="card">
        <img src="https://cdn-icons-png.flaticon.com/512/4305/4305535.png" alt=""/>
        <h2>Password Generator</h2>
        <div className="cont">
            <p>My Password Generator tool is a versatile and secure solution for generating strong and unique passwords. It employs advanced algorithms to create complex combinations of letters, numbers, and symbols, ensuring optimal security for online accounts. With a user-friendly interface, it simplifies the process of password creation, making it accessible to users of all levels. The tool also offers customization options, allowing users to tailor passwords to specific requirements. With robust encryption, it prioritizes data protection, and its offline capabilities guarantee privacy. Experience peace of mind knowing your online accounts are safeguarded by my Password Generator tool.       </p>
        <div class="button-container">
           <a href='https://hash-password.netlify.app/' className="jumping-button">Go to Channel of Facebook</a>
        </div>
            <div className="link">
                <a href="#"><i class="fab fa-codepen"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>

    <br /><br /><br />



    
<div className="footer">
  <h2>
    &copy; Ethical Hacker Certificated &trade;</h2>   
</div> 
        </div>
        </div>
        </div>;
};

export default Portfolio;
