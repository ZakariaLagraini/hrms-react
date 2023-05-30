import React from "react";
import {HiDocumentPlus, HiClipboardDocumentList} from "react-icons/hi2";
import {MdOutlineWork, MdOutgoingMail} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {


  function ButtonFactory(title, propIcon, link) {
    return (
      <Link to={link} className="home-button">
        {propIcon}
        <h3>{title}</h3>
        </Link>
    );
  }  


  return (
    <main>
      {
        ButtonFactory("ORDRE DE MISSION", <HiDocumentPlus size={30}/>, "/ordre-de-mission")
      }
      {
        ButtonFactory("ATTESTATION DE TRAVAIL", <MdOutlineWork size={30}/>, "/attestation-de-travail")
      }
{
        ButtonFactory("ATTESTATION DE VACATION", <HiClipboardDocumentList size={30}/>, "/attestation-de-vacation")
      }
      {
        ButtonFactory("DEMANDE DE QUITTER LE TERRITOIRE", <MdOutgoingMail size={30}/>, "/demande-de-quitter-territoire")
      }
      {
        ButtonFactory("EMPLOYÉS", <FaUsers size={30}/>, "/employee")
      }
      
    </main>
  );
}