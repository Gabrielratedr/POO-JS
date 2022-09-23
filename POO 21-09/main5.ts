import { Novo } from "./5/novo";
import { Velho } from "./5/velho";

let novoUm = new Novo ("Avenida das Américas, 75", "120.000", "30.000");
let velhoUm = new Velho ("Avenida das Américas, 75", "120.000", "20.000");

novoUm.adicional ();
velhoUm.desconto ();