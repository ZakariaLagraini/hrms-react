const express = require('express');
const cors = require('cors')
const mysql = require('mysql');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const pdfTemplate1 = require('./documents/ordre-mission');
const pdfTemplate2 = require('./documents/attestation-travail');
const pdfTemplate3 = require('./documents/attestation-vacation');
const pdfTemplate4 = require('./documents/demande-quitter-territoire');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hrms"
})

const app = express();
const PORT = 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())

app.post('/api/users/login', (req, res) => {

    const auth = req.body.auth;
    const password = req.body.password;

    db.query("SELECT id, username FROM admin WHERE (email = ? OR username = ?) AND password = ?", [auth, auth, password], (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });
})



app.post('/api/ordre-de-mission/create', (req, res) => {

    const cin = req.body.cin;
    const lieu = req.body.lieu;
    const objet = req.body.objet;
    const moyen_transport = req.body.moyen_transport;
    const date_depart = req.body.date_depart;
    const date_retour = req.body.date_retour;
    const admin_id = req.body.admin_id;

    var employee = null;

    db.query("INSERT INTO ordre_mission (employee_cin, admin_id, lieu, objet, moyen_transport, date_depart, date_retour) VALUES (?,?,?,?,?,?,?)", [cin, admin_id, lieu, objet, moyen_transport, date_depart, date_retour], (err, result) => {
        if (err) {
            console.log(err)
        }

        db.query("SELECT * FROM ordre_mission JOIN employees ON employees.cin = ? LIMIT 1;", [cin], (errr, rows) => {
            employee = rows[0];
            res.send(employee);
        });
    });
})

app.post('/api/create-pdf-ordre-de-mission', (req, res) => {
    pdf.create(pdfTemplate1(req.body), {}).toFile(`${__dirname}/generated/ordre-mission/${req.params.cin}.pdf`, (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

app.get('/api/fetch-pdf-ordre-de-mission/', (req, res) => {
    res.sendFile(`${__dirname}/generated/ordre-mission/${req.params.cin}.pdf`)
});

app.post('/api/attestation-de-travail/create', (req, res) => {

    const cin = req.body.cin;
    const admin_id = req.body.admin_id;

    db.query("INSERT INTO attestation_travail (employee_cin, admin_id) VALUES (?,?)", [cin, admin_id], (err, result) => {
        if (err) {
            console.log(err)
        }
        db.query("SELECT * FROM attestation_travail JOIN employees ON employees.cin = ? LIMIT 1;", [cin], (errr, rows) => {
            employee = rows[0];
            res.send(employee);
        });
    });
})


app.post('/api/create-pdf-attestation-de-travail', (req, res) => {
    pdf.create(pdfTemplate2(req.body), {}).toFile(`${__dirname}/generated/attestation-travail/${req.params.cin}.pdf`, (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

app.get('/api/fetch-pdf-attestation-de-travail/', (req, res) => {
    res.sendFile(`${__dirname}/generated/attestation-travail/${req.params.cin}.pdf`)
});



app.post('/api/attestation-de-vacation/create', (req, res) => {

    const cin = req.body.cin;
    const module = req.body.module;
    const filiere = req.body.filiere;
    const session = req.body.session;
    const semestre = req.body.semestre;
    const annee_universitaire = req.body.annee_universitaire;
    const admin_id = req.body.admin_id;

    db.query("INSERT INTO attestation_vacation (employee_cin, admin_id, module, filiere, session, semestre, annee_universitaire) VALUES (?,?,?,?,?,?,?)", [cin, admin_id, module, filiere, session, semestre, annee_universitaire], (err, result) => {
        if (err) {
            console.log(err)
        }
        db.query("SELECT * FROM attestation_vacation JOIN employees ON employees.cin = ? LIMIT 1;", [cin], (errr, rows) => {
            employee = rows[0];
            res.send(employee);
        });
    });
})

app.post('/api/create-pdf-attestation-de-vacation', (req, res) => {
    pdf.create(pdfTemplate3(req.body), {}).toFile(`${__dirname}/generated/attestation-de-vacation/${req.params.cin}.pdf`, (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

app.get('/api/fetch-pdf-attestation-de-vacation/', (req, res) => {
    res.sendFile(`${__dirname}/generated/attestation-de-vacation/${req.params.cin}.pdf`)
});


app.post('/api/demande-de-quitter-territoire/create', (req, res) => {

    const cin = req.body.cin;
    const quitte_de = req.body.quitte_de;
    const quitte_a = req.body.quitte_a;
    const admin_id = req.body.admin_id;

    db.query("INSERT INTO demande_quitter_territoire (employee_cin, admin_id, quitte_de, quitte_a ) VALUES (?,?,?,?)", [cin, admin_id, quitte_de, quitte_a], (err, result) => {
        if (err) {
            console.log(err)
        }
        db.query("SELECT * FROM demande_quitter_territoire JOIN employees ON employees.cin = ? LIMIT 1;", [cin], (errr, rows) => {
            employee = rows[0];
            res.send(employee);
        });
    });
})

app.post('/api/create-pdf-demande-de-quitter-territoire', (req, res) => {
    pdf.create(pdfTemplate4(req.body), {}).toFile(`${__dirname}/generated/demande-de-quitter-territoire/${req.params.cin}.pdf`, (err) => {
        if (err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});

app.get('/api/fetch-pdf-demande-de-quitter-territoire/', (req, res) => {
    res.sendFile(`${__dirname}/generated/demande-de-quitter-territoire/${req.params.cin}.pdf`)
});


app.get('/api/history/ordre-de-mission/', (req, res) => {

    const admin_id = req.query.admin;

    db.query("SELECT * from ordre_mission where admin_id = ?;", [admin_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get('/api/history/attestation-de-travail/', (req, res) => {

    const admin_id = req.query.admin;

    db.query("SELECT * from attestation_travail where admin_id = ?;", [admin_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


app.get('/api/history/attestation-de-vacation/', (req, res) => {

    const admin_id = req.query.admin;

    db.query("SELECT * from attestation_vacation where admin_id = ?;", [admin_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

app.get('/api/history/demande-de-quitter-territoire/', (req, res) => {

    const admin_id = req.query.admin;

    db.query("SELECT * from demande_quitter_territoire where admin_id = ?;", [admin_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


app.get('/api/getEmployee/show/', (req, res) => {

    const admin_id = req.query.admin;

    db.query("SELECT * from employees where admin_id = ?;", [admin_id], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});


app.post('/api/employee-add/add', (req, res) => {

    const cin = req.body.cin;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const grade = req.body.grade;
    const som = req.body.som;
    const date_fonction = req.body.date_fonction;
    const admin_id = req.body.admin_id;

    db.query("INSERT INTO employees (cin, admin_id, nom, prenom, grade, som, date_fonction) VALUES (?,?,?,?,?,?,?)", [cin, admin_id, nom, prenom, grade, som, date_fonction], (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result);
    });
}) ;

// Route to delete a post

app.delete('/api/delete/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on ＄{PORT}`)
})