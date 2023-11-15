import { Router } from "express";
import Aluno from "./controllers/AlunoController.js";
import Agenda from "./controllers/AgendaController.js";
import Calendario from "./controllers/CalendarioController.js";
import { validateToken } from "./validateToken.js";
const router = Router();


router.get("/aluno", Aluno.findAll);
router.get("/aluno/:idAluno", Aluno.findById);
router.delete("/aluno/:idAluno", Aluno.deleteById);
router.put("/aluno/:idAluno", Aluno.updateById);
router.post("/aluno", Aluno.store);
router.post("/aluno/login", Aluno.login);

router.get("/agenda", validateToken, Agenda.findAll);
router.get("/agenda/:idAgenda", validateToken, Agenda.findById);
router.delete("/agenda/:idAgenda", validateToken, Agenda.deleteById);
router.put("/agenda/:idAgenda", validateToken, Agenda.updateById);
router.post("/agenda", validateToken, Agenda.store);

router.get("/calendario", validateToken, Calendario.findAll);
router.get("/calendario/:idCalendario", validateToken, Calendario.findById);
router.delete("/calendario/:idCalendario", validateToken, Calendario.deleteById);
router.put("/calendario/:idCalendario", validateToken, Calendario.updateById);
router.post("/calendario", validateToken, Calendario.store);

export default router;
