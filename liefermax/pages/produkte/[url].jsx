import jsondb from "@/db/produkte"
import { useRouter } from "next/router"
import Link from "next/link";
import Image from "next/image";
import { ListGroup, Button, ListGroupItem } from "react-bootstrap";


export default function Produktseite(){
    const router = useRouter();
    const {url} = router.query ;
    const produkt = jsondb.produkte.find((a) => a.url === url);

    if (!produkt){
        return(
            <div>
                <h2>
                    Produkt nicht vorhanden
                </h2>
            </div>
        )
    }
    return (
        <div>
           <div>
            <Link href='/' className="text-dark">
            ← Zurück zum Übersicht
            </Link>
           </div>
           <div className="row row-cols-2 mt-2">
            <div>
                <Image className="rounded-3" src={produkt.bild} alt={produkt.name} width={600} height={600} layout="responsive"/>
           </div>
           <div>
            <h1>
                {produkt.name}
            </h1>
            <ListGroup variant="flush">
                <ListGroupItem>
                    <h2 className="text-danger">{produkt.preis} €</h2>
                </ListGroupItem>
                <ListGroupItem>
                    {produkt.beschreibung}
                </ListGroupItem>
                <ListGroupItem>
                    Extras:
                    doppelt <input className="form-check-input me-2" type="checkbox"/>
                    extro Pommes <input className="form-check-input me-2" type="checkbox"/>
                </ListGroupItem>
                <ListGroupItem>
                    <input className="form-control w50" type="number" placeholder="1" min='1'></input>
                </ListGroupItem>
                <ListGroupItem>
                    <div className="row shadow">
                        <Button variant="danger">Zum Warenkorb</Button>
                    </div>
                </ListGroupItem>
            </ListGroup>
           </div>
        </div>
    </div>
    )
}