import React from 'react';

import { Card } from './card/Card.component';

const CardList = function(props) {
return     (
<div className="card-list">
    {props.monsters.map(monster => (
        <Card id={monster.id} monster={monster} />
    ))}
</div>
);
}

export default CardList;