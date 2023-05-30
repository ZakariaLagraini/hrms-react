module.exports = (employee) => {
    const today = new Date();
    
    return `
  <!DOCTYPE html>
  <html>
  <head>
      <style>
          
  
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
  
      <h1>Attestation de vacation</h1>
  
      <p class="employee-info">
      Je soussigné, Monsieur le Doyen de la Faculté Polydisciplinaire de
      Taroudant atteste que Monsieur:
      <br>
      Nom et Prénom : ${employee.nom} ${employee.prenom} 
      <br>
      CIN : ${employee.cin}
      <br>
      A assuré les cours magistraux du Module  ${employee.module} pour La filière
      de ${employee.filiere} (${employee.semestre}) pendant la session ${employee.session} au titre de
      l’année universitaire ${employee.annee_universitaire}.
      La présente attestation est délivrée à l’intéressé sur sa demande pour
      servir et valoir ce que de droit.
      </p>
  
      
  </body>
  </html>
      `;
  };