import { Cachorro } from "./4/cachorro";
import { Cavalo } from "./4/cavalo";
import { Preguica } from "./4/preguica";

let cachorroUm = new Cachorro ("a", "b", "c", 1, "d", "e", "f", "g")
let cavaloUm = new Cavalo ("a", "b", "c", "d", "e", 1, "1", "g")
let preguicaUm = new Preguica ("a", "b", "c", "d", "e", "f", 1, "g")

cachorroUm.verCorrer ();
cachorroUm.onomatopeia ();

cavaloUm.verCorrer ();
cavaloUm.onomatopeia ();

preguicaUm.verCorrer ();
preguicaUm.onomatopeia ();
preguicaUm.subirArvore ();