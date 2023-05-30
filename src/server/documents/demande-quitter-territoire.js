module.exports = (employee) => {
    const today = new Date();
    
    return `
  <!DOCTYPE html>
  <html>
  <head>
      <style>
          body {
              font-family: Poppins;
          }
  
          header {
              text-align: center;
          }
  
          header img {
              display: block;
              margin: 0 auto;
              max-width: 100%;
              height: auto;
          }
  
          h1 {
              text-align: center;
              font-size: 24px;
              margin-top: 30px;
          }
  
          p {
              text-align: justify;
              margin: 20px 0;
          }
  
          .employee-info {
            display:flex;  
            margin: 100px;
            margin-bottom: 20px;
            text-align: center;
            justify-content: center;
            font-size:30px;
          }
  
          .date {
              position: absolute;
              bottom: 10px;
              right: 10px;
              margin:230px;
              font-size: 12px;
              color: #666;
          }
      </style>
  </head>
  <body>
      <header>
          <img src="https://www.uiz.ac.ma/sites/default/files/logo_0.png" alt="Header Image">
      </header>
  
      <h1>Autorisation de quitter la territoire </h1>
  
      <p class="employee-info">
        <br>
        Nom et Prenom : ${employee.nom} ${employee.prenom}
        <br>
        Grade : ${employee.grade}
        <br>
        SOM : ${employee.som}
        <br>
        CIN : ${employee.cin}
        <br>
          À quitter le territoire national du ${employee.quitte_de.substring(0,10)} Au ${employee.quitte_a.substring(0,10)}.
      </p>
  
      
  </body>
  </html>
      `;
  };