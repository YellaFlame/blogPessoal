import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public Id: number
    public titulo: string
    public data: Date
    public usuario: User
    public tema: Tema
}