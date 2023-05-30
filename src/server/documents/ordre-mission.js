module.exports = (employee) => {
    const today = new Date();
    
    return `
    <htm xml:lang="fr" lang="fr"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <style type="text/css"> * {margin:0; padding:30px; text-indent:0; }
    .h1 { color: black; font-family:"Arabic Typesetting"; font-style: normal; font-weight: bold; text-decoration: none; font-size: 36pt; }
    p { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: normal; text-decoration: none; font-size: 16pt; margin:0pt; }
    .h2 { color: black; font-family:"Times New Roman", serif; font-style: normal; font-weight: bold; text-decoration: none; font-size: 10pt; }
    </style>
    </head>
    <body>
    <p style="padding-top: 7pt;padding-left: 123pt;text-indent: 0pt;text-align: center;"><span class="h1" style=" background-color: #D2D2D2;">ORDRE DE MISSION</span></p>
    <p style="padding-top: 7pt;padding-left: 80pt;text-indent: 35pt;line-height: 150%;text-align: left;">Le Doyen de La Faculté Polydisciplinaire de Taroudant Ordonne à Monsieur :</p>
    <p style="text-indent: 0pt;text-align: left;"><br/></p>
    <p style="padding-left: 80pt;text-indent: 0pt;text-align: left;">Nom et Prénom : ${employee.nom} ${employee.prenom} </p>
    <p style="padding-top: 2pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">Grade  : ${employee.grade}</p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">SOM : ${employee.som}</p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">CIN : ${employee.cin}</p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">De se rendre en mission à : ${employee.lieu}</p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">Pour (objet de mission) : ${employee.objet} <span class="h2">.</span></p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">Moyen de Transport : ${employee.moyen_transport}</p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">Date de Départ : ${employee.date_depart.substring(0,10)}</p>
    <p style="padding-top: 9pt;padding-left: 80pt;text-indent: 0pt;text-align: left;">Date de retour : ${employee.date_retour.substring(0,10)} </p>
    
    <p style="text-indent: 0pt;text-align: left;"><br/></p><p style="padding-left: 122pt;text-indent: 0pt;text-align: center;">Fait à Taroudant le : ${employee.created_at.substring(0,10)}</p>
    </body>
    </html>
      `;
  };