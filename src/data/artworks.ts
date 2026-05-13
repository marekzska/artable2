import { Artwork, PeriodKey } from './types';
import { shuffle } from '../utils/shuffle';
import { artworkBios } from './artworkBios';

export const artworksByPeriod: Record<Exclude<PeriodKey, 'all_periods'>, Artwork[]> = {
  "medieval_and_gothic": [
    {
      "title": "Crucifixion Altarpiece",
      "author": "Melchior Broederlam",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Melchior_Broederlam_-_The_Dijon_Altarpiece_-_WGA03220.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Bad Government and the Effects of Bad Government on the City Life",
      "author": "Ambrogio Lorenzetti",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Ambrogio_Lorenzetti_-_Bad_Government_and_the_Effects_of_Bad_Government_on_the_City_Life_-_WGA13499.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Christ Pantocrator",
      "author": "unknown",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/CHRIST_PANTOCRATOR-SINAI(6th_Century).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Lamentation (The Mourning of Christ)",
      "author": "Giotto di Bondone",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/Giotto_-_Scrovegni_-_-36-_-_Lamentation_(The_Mourning_of_Christ)_adj.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Madonna with Child",
      "author": "Carlo Crivelli",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/Madonna_col_Bambino_Carlo_Crivelli_GAC.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Ognissanti Madonna",
      "author": "Giotto di Bondone",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Giotto,_1267_Around-1337_-_Maestà_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Maestà di Santa Trinita",
      "author": "Cimabue",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/Cimabue_-_Maestà_di_Santa_Trinita_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Rucellai Madonna",
      "author": "Duccio di Buoninsegna",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/Duccio_di_Buoninsegna_-_Rucellai_Madonna_(detail)_-_WGA06823.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Adoration of the Magi",
      "author": "Gentile da Fabriano",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Gentile_da_fabriano,_adorazione_dei_magi.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Wilton Diptych",
      "author": "unknown",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/Wilton_diptych.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Flight into Egypt",
      "author": "Giotto di Bondone",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/Giotto_di_Bondone_-_No._20_Scenes_from_the_Life_of_Christ_-_4._Flight_into_Egypt_-_WGA09198.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Annunciation with St. Margaret and St. Ansanus",
      "author": "Simone Martini and Lippo Memmi",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/Simone_Martini_-_The_Annunciation_and_Two_Saints_-_WGA21438.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Trinity",
      "author": "Andrei Rublev",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/Andrey_Rublev_-_Св._Троица_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Adoration of the Magi",
      "author": "Giotto di Bondone",
      "artmovement": "gothic",
      "link": "https://artworks-serve.vercel.app/assets/images/Giotto_-_Scrovegni_-_-18-_-_Adoration_of_the_Magi.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Allegory of Good Government",
      "author": "Ambrogio Lorenzetti",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Ambrogio_Lorenzetti_-_Allegory_of_Good_Government_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Maestà",
      "author": "Duccio di Buoninsegna",
      "artmovement": "medieval",
      "link": "https://artworks-serve.vercel.app/assets/images/Maest_0_duccio_1308-11_siena_duomo.jpg",
      "copyright": "Public domain"
    }
  ],
  "renaissance": [
    {
      "title": "Primavera",
      "author": "Sandro Botticelli",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Botticelli-primavera.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Assumption of Virgin",
      "author": "Titian",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Tiziani,_assunta_02.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Bacchus and Ariadne",
      "author": "Titian",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Titian_Bacchus_and_Ariadne.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Tower Of Babel",
      "author": "Pieter Bruegel the Elder",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Brueghel-tower-of-babel.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Harvesters",
      "author": "Pieter Bruegel the Elder",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/harvesters.jpeg",
      "copyright": "Public domain"
    },
    {
      "title": "The School of Athens",
      "author": "Raffaello Sanzio",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/_The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Head of a Woman",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Leonardo_da_vinci,_Female_Head.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Creation Of Adam",
      "author": "Michelangelo Buonarroti",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Creation_of_Adam,_Michelangelo_(1475–1564),_circa_1511.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Sistine Madonna",
      "author": "Raffaello Sanzio",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/RAFAEL_-_Madonna_Sixtina_(Gemäldegalerie_Alter_Meister,_Dresden,_1513-14._Óleo_sobre_lienzo,_265_x_196_cm).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Lady with an Ermine",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Lady_with_an_Ermine_-_Leonardo_da_Vinci_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Venus of Urbino",
      "author": "Titian",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Venus_de_Urbino,_por_Tiziano.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Melancholia",
      "author": "Albrecht Dürer",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Dürer_Melancholia_I.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "La Gioconda",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/La_Gioconda,_Leonardo_Da_Vinci.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Young Hare",
      "author": "Albrecht Dürer",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Albrecht_Dürer_-_Hare,_1502_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Battle Of Alexander At Issus",
      "author": "Albrecht Altdorfer",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Albrecht_Altdorfer_-_Schlacht_bei_Issus_(Alte_Pinakothek,_München)_2.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Birth of Venus",
      "author": "Sandro Botticelli",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Venus and Cupid",
      "author": "Pontormo",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Pontormo,_venere_e_amore_da_michelangelo,_1533_ca._01.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Flagellation of Christ",
      "author": "Pierro della Francesca",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Piero,_flagellazione.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Family Portrait",
      "author": "Sofonisba Anguissola",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Sofonisba-Anguissola1.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Diana and Actaeon",
      "author": "Titian",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Titian_-_Diana_and_Actaeon_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Ambassadors",
      "author": "Hans Holbein the Younger",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait of a Man",
      "author": "Jan van Eyck",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Portrait_of_a_Man_in_a_Turban_(Jan_van_Eyck).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Baptism of Christ",
      "author": "Andrea del Verrocchio",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Andrea_del_Verrocchio,_Leonardo_da_Vinci_-_Baptism_of_Christ_-_Uffizi.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Salvator Mundi",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Leonardo_da_Vinci,_Salvator_Mundi,_c.1500,_oil_on_walnut,_45.4_×_65.6_cm.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Doni Tondo",
      "author": "Michelangelo Buonarroti",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Tondo_Doni,_por_Miguel_Ángel.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait Of Henry VIII",
      "author": "Hans Holbein the Younger",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Holbein_henry8_full_length.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Lamentation of Christ",
      "author": "Andrea Mantegna",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Andrea_Mantegna_-_The_Lamentation_over_the_Dead_Christ_-_WGA13981.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Arnolfini Portrait",
      "author": "Jan van Eyck",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Van_Eyck_-_Arnolfini_Portrait.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Annunciation",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Leonardo_da_Vinci_-_Annunciation_-_WGA12677.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Last Supper",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Adoration of the Magi",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Leonardo_da_Vinci_-_Adoration_of_the_Magi_-_WGA12693.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Virgin of the Rocks",
      "author": "Leonardo Da Vinci",
      "artmovement": "renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_(Louvre).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Garden of Earthly Delights",
      "author": "Hieronymus Bosch",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Netherlandish Proverbs",
      "author": "Pieter Bruegel the Elder",
      "artmovement": "northern renaissance",
      "link": "https://artworks-serve.vercel.app/assets/images/Pieter_Brueghel_the_Elder_-_The_Dutch_Proverbs_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    }
  ],
  "mannerism_and_baroque": [
    {
      "title": "The Flagellation Of Christ",
      "author": "Caravaggio",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Flagellation_of_Christ-Caravaggio_(1607).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "View of Toledo",
      "author": "El Greco",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-El_Greco_-_View_of_Toledo_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Christ in the Storm on the Sea of Galilee",
      "author": "Rembrandt van Rijn",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Serenade",
      "author": "Judith Leyster",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Judith_Leyster_-_Serenade_-_WGA12960.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Night Watch",
      "author": "Rembrandt van Rijn",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-The_Night_Watch_-_Rembrandt_Harmenszoon_van_Rijn.png",
      "copyright": "Public domain"
    },
    {
      "title": "The Proposition",
      "author": "Judith Leyster",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Judith_Leyster_-_Man_Offering_Money_to_a_Young_Woman_-_564_-_Mauritshuis.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Las Meninas",
      "author": "Diego Velásquez",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Las_Meninas,_by_Diego_Velázquez,_from_Prado_in_Google_Earth.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Domine, quo vadis",
      "author": "Annibale Carracci",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Domine,_quo_vadis.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Paradise",
      "author": "Jan Brueghel the Younger",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Jan_Brueghel_the_Younger_Paradise.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Laughing Cavalier",
      "author": "Frans Hals",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Cavalier_soldier_Hals-1624x.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Wedding at Cana",
      "author": "Paolo Veronese",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/Paolo_Veronese_008.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Laocoön",
      "author": "El Greco",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/El_Greco_(Domenikos_Theotokopoulos)_-_Laocoön_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Judith And Her Maidservant",
      "author": "Artemisia Gentileschi",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Artemisia_Gentileschi_-_Judith_and_Her_Maidservant_with_the_Head_of_Holofernes_-_52.253_-_Detroit_Institute_of_Arts.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Girl with a Pearl Earring",
      "author": "Johannes Vermeer",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/1665_Girl_with_a_Pearl_Earring.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Madonna with the Long Neck",
      "author": "Parmigianino",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Entombment Of Christ",
      "author": "Caravaggio",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Entombment_of_Christ-Caravaggio_(c.1602-3).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Volterra Deposition",
      "author": "Rosso Fiorentino",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/Rosso_fiorentino,_deposizione,_1521_(volterra,_pinacoteca_civica)_01.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Il Paradiso",
      "author": "Jacopo Tintoretto",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/(Venice)_Jacopo_Tintoretto_-_Gloria_del_Paradiso_-_Sala_del_Maggior_Consiglio.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Flora",
      "author": "Rembrandt van Rijn",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Harmensz_van_Rijn_Rembrandt_-_Флора_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Bouquet Of Flowers",
      "author": "Ambrosius Bosschaert",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Ambrosius_Bosschaert_(I)_-_Bouquet_of_Flowers_-_WGA02652.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Miracle of the Slave",
      "author": "Jacopo Tintoretto",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/Accademia_-_Miracle_of_the_Slave_by_Tintoretto.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait Of Juan De Pareja",
      "author": "Diego Velásquez",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Retrato_de_Juan_Pareja,_by_Diego_Velázquez.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait of Eleanor of Toledo",
      "author": "Bronzino",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Astronomer",
      "author": "Johannes Vermeer",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Lucretia",
      "author": "Rembrandt van Rijn",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Rembrandt_van_Rijn_-_Lucretia_-_Google_Art_Project_(nAHoI2KdSaLshA).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Judith Beheading Holofernes",
      "author": "Artemisia Gentileschi",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Artemisia_Gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Medusa",
      "author": "Caravaggio",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Caravaggio_-_Medusa_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Burial of the Count of Orgaz",
      "author": "El Greco",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-El_Greco_-_The_Burial_of_the_Count_of_Orgaz.jpeg",
      "copyright": "Public domain"
    },
    {
      "title": "Samson And Delilah",
      "author": "Peter Paul Rubens",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/Samson_and_Delilah_by_Rubens.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Feast in the House of Levi",
      "author": "Paolo Veronese",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Feast_in_the_House_of_Levi_by_Paolo_Veronese_(edited_2).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Archdukes Albert and Isabella Visiting a Collector’s Cabinet",
      "author": "Hieronymus Francken II and Jan Brueghel the Elder",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/Hieronymus_Francken_Ii_-_The_Archdukes_Albert_and_Isabella_Visiting_a_Collector's_Cabinet_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Opening of the Fifth Seal",
      "author": "El Greco",
      "artmovement": "mannerism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-The_Vision_of_Saint_John_MET_DT1052.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Calling of Saint Matthew",
      "author": "Caravaggio",
      "artmovement": "baroque",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Calling_of_Saint_Matthew-Caravaggo_(1599-1600).jpg",
      "copyright": "Public domain"
    }
  ],
  "rococo": [
    {
      "title": "The Meeting",
      "author": "Jean-Honoré Fragonard",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Progress_of_Love_-_The_Meeting_-_Fragonard_1771-72.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Declaration of Love",
      "author": "Jean François de Troy",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Declarationoflove.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Bathing Pool",
      "author": "Hubert Robert",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Hubert_Robert_-_The_Bathing_Pool.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Charles III Dining Before the Court",
      "author": "Luis Paret y Alcázar",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Luis_Paret_Y_Alcazár_-_Charles_III_Dining_before_the_Court_-_WGA17017.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Marriage of the Emperor Frederick and Beatrice of Burgundy",
      "author": "Giovanni Battista Tiepolo",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Hochzeit_friedrich_I._tiepolo.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Diana Leaving the Bath",
      "author": "François Boucher",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/François_Boucher_-_Diana_Resting_after_her_Bath,_1742.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Marie Antoinette with a Rose",
      "author": "Elisabeth Louise Vigée Le Brun",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Louise_Elisabeth_Vigée-Lebrun_-_Marie-Antoinette_dit_«_à_la_Rose_»_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Interrupted Sleep",
      "author": "François Boucher",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/François_Boucher_-_The_Interrupted_Sleep_-_WGA2905.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "An Allegory with Venus and Time",
      "author": "Giovanni Battista Tiepolo",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-TIEPOLO_-_An_Allegory_with_Venus_and_Time.png",
      "copyright": "Public domain"
    },
    {
      "title": "The Triumph of Venice",
      "author": "Pompeo Batoni",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Batoni,_Pompeo_-_The_Triumph_of_Venice_-_1737.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Marie Antoinette and Her Children",
      "author": "Elisabeth Louise Vigée Le Brun",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Louise_Elisabeth_Vigée-Lebrun_-_Marie-Antoinette_de_Lorraine-Habsbourg,_reine_de_France_et_ses_enfants_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Swing",
      "author": "Jean-Honoré Fragonard",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Fragonard,_The_Swing-detail_voyeur.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Hercules and Omphale",
      "author": "François Lemoyne",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/François_Lemoyne_-_Hercules_and_Omphale_-_WGA12655.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait of the Marquise de Pompadour",
      "author": "Maurice Quentin de La Tour",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Maurice_Quentin_de_La_Tour_-_Marquise_de_Pompadour_-_WGA12359.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Blue Boy",
      "author": "Thomas Gainsborough",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Thomas_Gainsborough_-_The_Blue_Boy_(c._1770).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Lock",
      "author": "Jean-Honoré Fragonard",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Jean-Honoré_Fragonard_-_The_Bolt_-_WGA8080.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait of Madame de Pompadour",
      "author": "François Boucher",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Madame_de_Pompadour_by_François_BoucherFXD.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Pierrot, formerly known as Gilles",
      "author": "Jean-Antoine Watteau",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Jean-Antoine_Watteau_-_Pierrot,_dit_autrefois_Gilles.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Bouquet of flowers in a glass of water",
      "author": "Anne Vallayer-Coster",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Beaux-Arts_de_Carcassonne_-_Bouquet_de_fleurs_dans_un_verre_d'eau_-_Anne_Vallayer-Coster_-_Joconde04400000408.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Pilgrimage to Cythera",
      "author": "Jean-Antoine Watteau",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/L'Embarquement_pour_Cythère,_by_Antoine_Watteau,_from_C2RMF_retouched.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Brown Odalisque",
      "author": "François Boucher",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Brown-Odalisque-1745.JPG",
      "copyright": "Public domain"
    },
    {
      "title": "The Settlement",
      "author": "William Hogarth",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-William_Hogarth_-_Marriage_A-la-Mode_1_The_Marriage_Settlement.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Marie Antoinette in a Court Dress",
      "author": "Elisabeth Louise Vigée Le Brun",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Marie_Antoinette_Adult.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Soap Bubbles",
      "author": "Jean-Baptiste-Siméon Chardin",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/Jean_Siméon_Chardin_-_Soap_Bubbles_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Triumph of Venus",
      "author": "François Boucher",
      "artmovement": "rococo",
      "link": "https://artworks-serve.vercel.app/assets/images/François_Boucher_-_The_Triumph_of_Venus_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    }
  ],
  "neoclassicism": [
    {
      "title": "The Sorrow of Telemachus",
      "author": "Angelica Kauffmann",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Sorrow_of_Telemachus_MET_DP169392.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Parnassus",
      "author": "Anton Raphael Mengs",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Parnassus,_by_Anton_Raphael_Mengs.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Death Of Marat",
      "author": "Jacques-Louis David",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Death_of_Marat_by_David.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Charles Garnier",
      "author": "Paul-Jacques-Aimé Baudry",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Charles_Garnier_1868_by_Paul_Baudry_1828_1886_edit.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Turkish Bath",
      "author": "Jean Auguste Dominique Ingres",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Le_Bain_Turc,_by_Jean_Auguste_Dominique_Ingres,_from_C2RMF_retouched.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Grande Odalisque",
      "author": "Jean Auguste Dominique Ingres",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/France-003335_-_Grande_Odalisque_(16051027150).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Self-Portrait with Her Daughter",
      "author": "Elisabeth Louise Vigée Le Brun",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Self-portrait_with_Her_Daughter_by_Elisabeth-Louise_Vigée_Le_BrunFXD.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "King Lear Weeping over the Dead Body of Cordelia",
      "author": "James Barry",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/James_Barry_(1741-1806)_-_King_Lear_Weeping_over_the_Dead_Body_of_Cordelia_-_T00556_-_Tate.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Death of General Wolfe",
      "author": "Benjamin West",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Benjamin_West_005.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Patroclus",
      "author": "Jacques-Louis David",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Jacques-Louis_David_-_Patroclus_-_WGA06044.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Napoleon at the Great St. Bernard",
      "author": "Jacques-Louis David",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Napoleon_at_the_Great_St._Bernard_-_Jacques-Louis_David_-_Google_Cultural_Institute.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Death of Socrates",
      "author": "Jacques-Louis David",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/David_-_The_Death_of_Socrates.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Intervention of the Sabine Women",
      "author": "Jacques-Louis David",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/F0440_Louvre_JL_David_Sabines_INV3691_rwk.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Napoleon I On His Imperial Throne",
      "author": "Jean Auguste Dominique Ingres",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Ingres,_Napoleon_on_his_Imperial_throne.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Lansdowne Portrait",
      "author": "Gilbert Stuart",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Gilbert_Stuart,_George_Washington_(Lansdowne_portrait,_1796).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Oath Of Horatii",
      "author": "Jacques-Louis David",
      "artmovement": "neoclassicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    }
  ],
  "nineteenth_century": [
    {
      "title": "Boreas",
      "author": "John William Waterhouse",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Boreas.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Magic Circle",
      "author": "John William Waterhouse",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/John_William_Waterhouse_-_The_Magic_Circle_(study).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Naked Maja",
      "author": "Francisco de Goya",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Goya_Maja_naga2.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Great Wave Off Kanagawa",
      "author": "Katsushika Hokusai",
      "artmovement": "ukiyo-e",
      "link": "https://artworks-serve.vercel.app/assets/images/Great_Wave_off_Kanagawa2.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Moorish Bath",
      "author": "Jean-Léon Gérôme",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Jean-Léon_Gérôme_-_Moorish_Bath_-_66.280_-_Rhode_Island_School_of_Design_Museum.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Horse Fair",
      "author": "Rosa Bonheur",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/5-the-horse-fair-rosa-bonheur.jpg!Large.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "In A Roman Osteria",
      "author": "Carl Bloch",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Carl_Bloch_-_In_a_Roman_Osteria_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Alexander Von Humboldt",
      "author": "Friedrich Georg Weitsch",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Alexander_von_Humboldt,_by_Friedrich_Georg_Weitsch.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Third of May 1808",
      "author": "Francisco de Goya",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/El_Tres_de_Mayo,_by_Francisco_de_Goya,_from_Prado_thin_black_margin.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Liberty Leading the People",
      "author": "Eugene Delacroix",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Eugène_Delacroix_-_Liberty_Leading_the_People_(28th_July_1830)_-_WGA6177.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Wapping",
      "author": "James Abbott McNeill Whistler",
      "artmovement": "tonalism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Whistler_Wapping.png",
      "copyright": "Public domain"
    },
    {
      "title": "Dante And Virgil In Hell",
      "author": "William-Adolphe Bouguereau",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/William-Adolphe_Bouguereau_(1825-1905)_-_Dante_And_Virgil_In_Hell_(1850).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Whistler's Mother",
      "author": "James Abbott McNeill Whistler",
      "artmovement": "tonalism",
      "link": "https://artworks-serve.vercel.app/assets/images/Whistlers_Mother_high_res.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Pollice Verso",
      "author": "Jean-Léon Gérôme",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Jean-Leon_Gerome_Pollice_Verso_(cropped3).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Birth of Venus",
      "author": "Alexandre Cabanel",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Raft of the Medusa",
      "author": "Théodore Géricault",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/JEAN_LOUIS_THÉODORE_GÉRICAULT_-_La_Balsa_de_la_Medusa_(Museo_del_Louvre,_1818-19).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait of Madame de Florian",
      "author": "Giovanni Boldini",
      "artmovement": "macchiaioli",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Giovanni_Boldini_-_Portrait_de_madame_de_Florian.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Lady Godiva",
      "author": "John Maler Collier",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/Lady_Godiva_(John_Collier,_c._1897).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Kiss",
      "author": "Francesco Paolo Hayez",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Hayez_-_The_Kiss,_1859,_6335.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Wanderer above the Sea of Fog",
      "author": "Caspar David Friedrich",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Pinkie",
      "author": "Thomas Lawrence",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Pinkie_detailed.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Mermaid",
      "author": "John William Waterhouse",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/Waterhouse_a_mermaid.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Hireling Shepherd",
      "author": "William Holman Hunt",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-William_Holman_Hunt_001.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Ophelia",
      "author": "John Everett Millais",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Nocturne",
      "author": "James Abbott McNeill Whistler",
      "artmovement": "tonalism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Whistler-Nocturne_in_black_and_gold.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Lady Of Shalott",
      "author": "John William Waterhouse",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Gleaners",
      "author": "Jean-Francois Millet",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/Jean-François_Millet_-_Gleaners_-_Google_Art_Project_2.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Las Damas Romanas",
      "author": "Juan Luna",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/Luna_damas-romanas.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Gulf Stream",
      "author": "Winslow Homer",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Echo and Narcissus",
      "author": "John William Waterhouse",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-John_William_Waterhouse_-_Echo_and_Narcissus_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "España Y Filipinas",
      "author": "Juan Luna",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Espana_y_Filipinas_by_Juan_Luna.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Paul Revere",
      "author": "John Singleton Copley",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-J_S_Copley_-_Paul_Revere_(cropped).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Washington Crossing The Delaware",
      "author": "Emanuel Leutze",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Washington_Crossing_the_Delaware_by_Emanuel_Leutze,_MMA-NYC,_1851.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Stag Night At Sharkeys",
      "author": "George Bellows",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-1909_Stag_at_Sharkey's.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Moonrise Over The Sea",
      "author": "Caspar David Friedrich",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Caspar_David_Friedrich_-_Mondaufgang_am_Meer_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Chalk Cliffs On Rügen",
      "author": "Caspar David Friedrich",
      "artmovement": "romanticism",
      "link": "https://artworks-serve.vercel.app/assets/images/Caspar_David_Friedrich's_Chalk_Cliffs_on_Rügen.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Flaming June",
      "author": "Frederic Leighton",
      "artmovement": "pre-raphaelite",
      "link": "https://artworks-serve.vercel.app/assets/images/Flaming_June,_by_Frederic_Lord_Leighton_(1830-1896).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Breezing Up",
      "author": "Winslow Homer",
      "artmovement": "realism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Winslow_Homer_-_Breezing_Up_(A_Fair_Wind)_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Birth of Venus",
      "author": "William-Adolphe Bouguereau",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/William-Adolphe_Bouguereau_(1825-1905)_-_The_Birth_of_Venus_(1879).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Among the Ruins",
      "author": "Sir Lawrence Alma-Tadema",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/among-the-ruins-1904.jpg!Large.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Mischief and Repose",
      "author": "John William Godward",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Godward,_John_William_-_Mischief_and_Repose_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Nymphs and Satyr",
      "author": "William-Adolphe Bouguereau",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/William-Adolphe_Bouguereau_(1825-1905)_-_Nymphs_and_Satyr_(1873)_HQ.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Abduction of Psyche",
      "author": "William-Adolphe Bouguereau",
      "artmovement": "academicism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Eros_and_Psyche_Eros_y_Psique_(Cupido)_PsycheabductFXD.jpg",
      "copyright": "Public domain"
    }
  ],
  "modern": [
    {
      "title": "Nighthawks",
      "author": "Edward Hopper",
      "artmovement": "modern",
      "link": "https://artworks-serve.vercel.app/assets/images/Nighthawks_by_Edward_Hopper_1942.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Irises",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Irises-Vincent_van_Gogh.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Boulevard des Capucines",
      "author": "Claude Monet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Claude_Monet_-_Boulevard_des_Capucines_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Sleeping Gypsy",
      "author": "Henri Rousseau",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/La_Bohémienne_endormie.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Oarsmen",
      "author": "Gustave Caillebotte",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-G._Caillebotte_-_Canotiers_ramant_sur_l'Yerres.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Dance Class",
      "author": "Edgar Degas",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Dance_Class_A33234.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Red Roofs, A Corner Of A Village, Winter Effect",
      "author": "Camille Pissarro",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Camille_Pissarro_-_Red_roofs,_corner_of_a_village,_winter_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Adele Bloch-Bauer I",
      "author": "Gustav Klimt",
      "artmovement": "art nouveau",
      "link": "https://artworks-serve.vercel.app/assets/images/Gustav_Klimt_-_Porträt_der_Adele_Bloch-Bauer_I_(1907).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Pink And Blue",
      "author": "Pierre-Auguste Renoir",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Renoir_-_pink-and-blue-1881.jpg!PinterestLarge.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Paris Street In Rainy Weather",
      "author": "Gustave Caillebotte",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Gustave_Caillebotte_-_Paris_Street;_Rainy_Day_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Luncheon of the Boating Party",
      "author": "Pierre-Auguste Renoir",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Seed Of The Areoi",
      "author": "Paul Gauguin",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Paul_Gauguin_-_Te_aa_no_areois_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Little Girl In Blue Armchair",
      "author": "Mary Cassatt",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Cassatt_Mary_Little_Girl_in_a_Blue_Armchair_(1878).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Impression",
      "author": "Claude Monet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Monet_-_Impression,_Sunrise.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Woman with a Parasol",
      "author": "Claude Monet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Floor Scrapers",
      "author": "Gustave Caillebotte",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Gustave_Caillebotte_-_Les_raboteurs_de_parquet_(étude).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Water Lilies",
      "author": "Claude Monet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Monet_w1897.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Boating Party",
      "author": "Mary Cassatt",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/270px-Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Composition with Red Blue and Yellow",
      "author": "Piet Mondrian",
      "artmovement": "abstract art",
      "link": "https://artworks-serve.vercel.app/assets/images/Piet_Mondriaan,_1930_-_Mondrian_Composition_II_in_Red,_Blue,_and_Yellow.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Composition VIII",
      "author": "Wassily Kandinsky",
      "artmovement": "modern",
      "link": "https://artworks-serve.vercel.app/assets/images/Vassily_Kandinsky,_1923_-_Composition_8,_huile_sur_toile,_140_cm_x_201_cm,_Musée_Guggenheim,_New_York.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Japanese Footbridge And The Water Lily Pool",
      "author": "Claude Monet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Japanese_Footbridge-Claude_Monet.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Siesta",
      "author": "Paul Gauguin",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-1893_Gauguin_Siesta_anagoria.jpeg",
      "copyright": "Public domain"
    },
    {
      "title": "The Orange Trees",
      "author": "Gustave Caillebotte",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-G._Caillebotte_-_Les_orangers.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Vase With Fifteen Sunflowers",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Van_Gogh_Vase_with_Fifteen_Sunflowers.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Starry Night",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Lane In The Public Park At Arles",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Van_Gogh_Entrance_to_the_Public_Park_in_Arles.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Café Terrace at Night",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Van_Gogh_-_Terrasse_des_Cafés_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg",
      "copyright": "Public domain"
    },
    {
      "title": "A Meadow In The Mountains",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/A_Meadow_in_the_Mountains_-_Le_Mas_de_Saint-Paul.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait Of The Postman Joseph Roulin",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Vincent_van_Gogh_-_Portrait_de_Joseph_Roulin_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Guernica",
      "author": "Pablo Picasso",
      "artmovement": "cubism",
      "link": "https://artworks-serve.vercel.app/assets/images/PicassoGuernica.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Garden Of The Tuileries On A Winter Afternoon",
      "author": "Camille Pissarro",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Camille_Pissarro,_The_Garden_of_the_Tuileries_on_a_Winter_Afternoon,_1899_N2.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Scream",
      "author": "Edvard Munch",
      "artmovement": "expressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Edvard_Munch_-_The_Scream_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Nude Descending a Staircase, No. 2",
      "author": "Marcel Duchamp",
      "artmovement": "cubism",
      "link": "https://artworks-serve.vercel.app/assets/images/Duchamp_-_Nude_Descending_a_Staircase.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Spanish Dancer",
      "author": "John Singer Sargent",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Sargent_John_Singer_Spanish_Dancer.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Hangover",
      "author": "Henri de Toulouse-Lautrec",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-The_Hangover_(Suzanne_Valadon),_by_Henri_de_Toulouse-Lautrec,_1887-1889,_oil_on_canvas_-_Fogg_Art_Museum,_Harvard_University_-_DSC00697.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Les Demoiselles d’Avignon",
      "author": "Pablo Picasso",
      "artmovement": "cubism",
      "link": "https://artworks-serve.vercel.app/assets/images/Les_Demoiselles_d'Avignon.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Sailboat at Le Petit-Gennevilliers",
      "author": "Claude Monet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Claude_Monet_-_Boats_Moored_at_Le_Petit-Gennevilliers,_1874.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Robert Louis Stevenson",
      "author": "John Singer Sargent",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-John_Singer_Sargent_-_Robert_Louis_Stevenson_and_His_Wife_-_2005.3_-_Crystal_Bridges_Museum_of_American_Art.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Bedroom",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Vincent_van_Gogh_-_Van_Gogh's_Bedroom_in_Arles_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Tiger",
      "author": "Franz Marc",
      "artmovement": "expressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Franz_Marc_-_Tiger_-_G_13320_-_Lenbachhaus.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "At Eternity's Gate",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-1890-05_van_Gogh_At_Eternitys_Gate_anagoria.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Wooded Path In Autumn",
      "author": "Hans Andersen Brendekilde",
      "artmovement": "social realism",
      "link": "https://artworks-serve.vercel.app/assets/images/H._A._Brendekilde_-_A_wooded_path_in_autumn_(1902).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Card Players",
      "author": "Paul Cézanne",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Cezanne_The_Card_Players_Metmuseum.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Day Of The God",
      "author": "Paul Gauguin",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Paul_Gauguin_-_Mahana_no_atua_(Day_of_the_God)_-_1926.198_-_Art_Institute_of_Chicago.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "By The Seashore",
      "author": "Pierre-Auguste Renoir",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Renoir_-_by-the-seashore-1883.jpg!PinterestLarge.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Bal du moulin de la Galette",
      "author": "Pierre-Auguste Renoir",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Bal_du_moulin_de_la_Galette_by_Pierre-Auguste_Renoir_d1c9f4e7-113b-43b7-9426-6e58eaa4cf98_large.webp",
      "copyright": "Public domain"
    },
    {
      "title": "American Gothic",
      "author": "Grant Wood",
      "artmovement": "modern",
      "link": "https://artworks-serve.vercel.app/assets/images/Grant_DeVolson_Wood_-_American_Gothic.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Portrait Of Madame X",
      "author": "John Singer Sargent",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Madame_X_(Madame_Pierre_Gautreau),_John_Singer_Sargent,_1884_(unfree_frame_crop).jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Persistence Of Memory",
      "author": "Salvador Dalí",
      "artmovement": "surrealism",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Persistence_of_Memory.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "When Will You Marry?",
      "author": "Paul Gauguin",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Paul_Gauguin,_Nafea_Faa_Ipoipo__1892,_oil_on_canvas,_101_x_77_cm.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Wheat Field with Cypresses",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Wheat-Field-with-Cypresses-(1889)-Vincent-van-Gogh-Met.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Cotton Office In New Orleans",
      "author": "Edgar Degas",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Cottonexchange1873-Degas.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Nu couché",
      "author": "Amedeo Modigliani",
      "artmovement": "expressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Modigliani_-_Nu_couché.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Friend In Need",
      "author": "Cassius Marcellus Coolidge",
      "artmovement": "kitsch",
      "link": "https://artworks-serve.vercel.app/assets/images/A_Friend_in_Need_1903_C.M.Coolidge.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Luncheon on the Grass",
      "author": "Édouard Manet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "A Sunday Afternoon on the Island of La Grande Jatte",
      "author": "George Seurat",
      "artmovement": "pointillism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Georges_Seurat_-_Un_dimanche_après-midi_à_l'Île_de_la_Grande_Jatte_v2.jpeg",
      "copyright": "Public domain"
    },
    {
      "title": "Boulevard Montmartre Spring",
      "author": "Camille Pissarro",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/640px-Camille_Pissarro_-_Boulevard_Montmartre,_Spring_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Kiss",
      "author": "Gustav Klimt",
      "artmovement": "art nouveau",
      "link": "https://artworks-serve.vercel.app/assets/images/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "The Night Cafe",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/300px-Vincent_Willem_van_Gogh_076.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Branches with Almond Blossom",
      "author": "Vincent van Gogh",
      "artmovement": "post-impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Dance at Bougival",
      "author": "Pierre-Auguste Renoir",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Dance_at_Bougival_by_Pierre_Auguste_Renoir_large.webp",
      "copyright": "Public domain"
    },
    {
      "title": "A Bar at the Folies-Bergère",
      "author": "Édouard Manet",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/Edouard_Manet,_A_Bar_at_the_Folies-Bergère.jpg",
      "copyright": "Public domain"
    },
    {
      "title": "Dancers Bending Down",
      "author": "Edgar Degas",
      "artmovement": "impressionism",
      "link": "https://artworks-serve.vercel.app/assets/images/dancers-bending-down-1885.jpg!Large.jpg",
      "copyright": "Public domain"
    }
  ]
};

function withBio(a: Artwork): Artwork {
  const bio = artworkBios[a.link];
  return bio ? { ...a, bio } : a;
}

export function getArtworksForPeriod(period: PeriodKey): Artwork[] {
  if (period === 'all_periods') {
    return shuffle(Object.values(artworksByPeriod).flat().map(withBio));
  }
  return (artworksByPeriod[period] ?? []).map(withBio);
}
