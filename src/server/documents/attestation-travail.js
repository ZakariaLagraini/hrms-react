module.exports = (employee) => {
    const today = new Date();
    
    return `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  
  <style>
    body {
      margin: 0;
      padding: 0;
    }

    header {
      padding: 20px;
      background-color: #F0F0F0;
      text-align: center;
    }

    h1 {
      margin: 0;
    }

    .logo {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      font-size: 30px;
    }
  </style>
</head>
<body>
  <header>
    <img src="https://www.uiz.ac.ma/sites/default/files/logo_0.png" class="logo"> 
    <h1>Attestation de travail</h1>
      <p style="padding-top: 5pt; padding-left:70pt; text-indent: 0pt; text-align: left; font-size: 18px; font-weight: BOLD">Le Doyen de La Faculté Polydisciplinaire de Taroudant atteste que Monsieur :</p>
        <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <h2 style="padding-top: 9pt; padding-left: 80pt; text-indent: 0pt; text-align: left; font-size: 20PX; font-weight: normal">Nom et Prénom <span class="p">: ${employee.nom} ${employee.prenom}</span></h2>
          <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <h2 style="padding-top: 7pt; padding-left: 80pt; text-indent: 0pt; text-align: left; font-size: 20PX; font-weight: normal ">Grade<span class="s1"> : ${employee.grade}</span></h2>
        <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <p class="s2" style="padding-top: 3pt; padding-left: 80pt; text-indent: 0pt; text-align: left; font-size: 20PX; font-weight: normal ">SOM <span class="h2"> : ${employee.som}</span></p>
        <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <p class="s2" style="padding-top: 5pt; padding-left: 80pt; text-indent: 0pt; text-align: left; font-size: 20PX; font-weight: normal" >CIN <span class="h2"> </span><span class="p"> : ${employee.cin}</span></p>
        <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <p style="padding-top: 5pt; padding-left: 70pt; text-indent: 0pt; text-align: left;">Est en fonction à la Faculté Polydisciplinaire de Taroudant depuis le</p>
        <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <p style="padding-top: 9pt; padding-left: 70pt; text-indent: 3pt; line-height: 227%; text-align: left;">La présente attestation est délivrée à l’intéressé sur sa demande pour servir et valoir ce que de droit.</p>
        <p style="text-indent: 0pt; text-align: left;"><br /></p>
        <p class="s3" style="padding-left: 100px: 11pt; text-indent: 750pt; text-align: inherit;">Fait à Taroudant le ${employee.created_at.substring(0,10)}</p>
  </header>
  
  <!-- Your content goes here -->
  
</body>
</html>
      `;
  };