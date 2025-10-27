import React from "react";
import { Button } from "../components/Button";
import type Interfaces from "../types/Interfaces";
import { Card } from "../components/Card";

interface CardProps {
    card: Interfaces[];
}

export default function Gallery({ card }: CardProps) {
    var [pos, setPos] = React.useState(0);

    function nextCard() {
        if (pos < card.length - 1) {
            setPos(pos + 1);
        }
    }

    function prevCard() {
        if (pos > 0) {
            setPos(pos - 1);
        }
    }

    return (
        <div>
            <div className="flex flex-row gap-8 justify-center">
                {
                    pos > 0 &&
                    <Button title="Anterior" callback={prevCard} />
                }
                <p>({pos+1} de {card.length})</p>
                {
                    pos < card.length - 1 &&
                    <Button title="Siguiente" callback={nextCard} />
                }
            </div>

            <div className="flex justify-center mt-10">
                {
                    card.map((b, index) => {
                        return (
                            index === pos &&
                            <Card name={b.name} imageUrl={b.url} description={b.description} />
                        )
                    })
                }
            </div>
        </div>
    )
}