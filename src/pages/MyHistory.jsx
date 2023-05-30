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
        ButtonFactory("HISTORIQUES DES ORDRES DE MISSION", <HiDocumentPlus size={30}/>, "/history-ordre-de-mission")
      }
      {
        ButtonFactory("HISTORIQUES DES ATTESTATIONS DE TRAVAIL", <MdOutlineWork size={30}/>, "/history-attestation-de-travail")
      }
{
        ButtonFactory("HISTORIQUES DES ATTESTATIONS DE VACATION", <HiClipboardDocumentList size={30}/>, "/history-attestation-de-vacation")
      }
      {
        ButtonFactory("HISTORIQUES DES DEMANDES DE QUITTER LE TERRITOIRE", <MdOutgoingMail size={30}/>, "/history-demande-de-quitter-territoire")
      }
      
      
    </main>
  );
}