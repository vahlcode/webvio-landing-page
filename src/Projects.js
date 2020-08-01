import Project1 from "./Assets/Images/Featured Product 1.png";
import Project2 from "./Assets/Images/Featured Product 2.png";
import Project3 from "./Assets/Images/Featured Product 3.png";
import Angel from "./Assets/Images/Angel.png";
import Lina from "./Assets/Images/Lina.png";
import Eunice from "./Assets/Images/Eunice.png";

const Projects = [
    {
        title: "The wall new Balenciaga.com",
        description: "This article is floated online with an aim to help you find the best dvd printing solution. \n\nDvd printing is an important feature used by large and small DVD production houses to print information on DVDs.",
        link: "#",
        image: Project1,
        ltr: false,
        comment: {
            comment: "“In my history of working with trade show vendors, I can honestly say that there is not one company that I've ever worked with that has better service than Exhibit Systems.”",
            clientName: "Angel Amstrong",
            clientPosition: "Founder & CEO, Google",
            clientPic: Angel
        }
    },
    {
        title: "Is this the future of 3D model?",
        description: "While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. \nIt is those feelings that drive our love of astronomy and our desire to learn more and more about it. ",
        link: "#",
        image: Project2,
        ltr: true,
        comment: {
            comment: "““I know they are going to be honest with me. I am not going to get a subpar product; I know it is going to be good. That is the number one advantage of working with Exhibit Systems.",
            clientName: "Lina Hart",
            clientPosition: "Founder & CEO, Jico",
            clientPic: Lina
        }
    },
    {
        title: " Is this the future of Online Booking",
        description: "You should be able to find several indispensable facts about motivation in the following paragraphs. \nIf there’s at least one fact you didn’t know before, imagine the difference it might make.",
        link: "#",
        image: Project3,
        ltr: false,
        comment: {
            comment: "“Exhibit Systems is not a provider. They are not a supplier. They are a partner with expertise in making trade shows effective.”",
            clientName: "Eunice Oliver",
            clientPosition: "Founder & CEO, Zoom",
            clientPic: Eunice
        }
    }
]

export default Projects;