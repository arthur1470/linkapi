import { Column } from "typeorm";

export class Deal {
    @Column("deal_id")
    dealId: number;

    @Column()
    title: string;

    @Column()
    client: string;

    @Column()
    seller: string;

    @Column("company_name")
    companyName: string;

    @Column("won_date")
    wonDate: Date;

    @Column()
    value: number;

    @Column("client_number")
    clientNumber?: string;

    @Column("client_email")
    clientEmail?: string;
}
