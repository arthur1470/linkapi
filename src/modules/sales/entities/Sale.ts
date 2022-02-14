import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

import { Deal } from "./Deal";

@Entity()
export class Sale {
    @ObjectIdColumn()
    id?: ObjectID;

    @Column((type) => Deal)
    deals: Deal[];

    @Column("total_value")
    totalValue: number;

    @Column()
    date: Date;
}
