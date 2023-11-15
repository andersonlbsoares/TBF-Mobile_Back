import Aluno from "../model/Aluno.js";
import AlunoRepository from "../repositories/AlunoRepository.js";
import TokenService from "../services/TokenService.js";

class AlunoController {
  async findAll(request, response) {
    try {
      const result = await AlunoRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idAluno;
    try {
      const result = await AlunoRepository.findById(id);
      if (Object.keys(result).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async findByNome(request, response) {
    const nome = request.params.nomeAluno;
    try {
      const result = await AlunoRepository.findByNome(nome);
      if (Object.keys(result).length == 0) {
        response.json({ message: "Nome not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }


  async updateById(request, response) {
    const id = request.params.idAluno;
    try {
      const exists = await AlunoRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const aluno = new Aluno(
            request.body.nomeAluno,
            request.body.usuarioAluno,
            request.body.senhaAluno

          );
          await AlunoRepository.update(id, aluno);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async deleteById(request, response) {
    const id = request.params.idAluno;
    try {
      const exists = await AlunoRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await AlunoRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const exists = await AlunoRepository.findByNome(request.body.nomeAluno);
      if (Object.keys(exists).length > 0) {
        response.json({ message: "User already registered." });
      } else {
        try {
          const aluno = new Aluno(
            request.body.nomeAluno,
            request.body.usuarioAluno,
            request.body.senhaAluno
          );
          await AlunoRepository.create(aluno);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async login(request, response) {
    const usuario = request.body.usuarioAluno;
    const senha = request.body.senhaAluno;
    try {
      const result = await AlunoRepository.login(usuario, senha);
      if (Object.keys(result).length == 0) {
        response.json({ message: "Invalid credentials" });
      } else {
        let payload = {
          id: result[0].id_aluno,
          nome: result[0].nome_aluno,
        };
        const token = await Promise.resolve(TokenService.generateToken(payload));

        payload = {
          ...payload,
          token: token,
        };

        response.json(payload);
      }
    } catch (error) {
      response.json(error);
    }
  }
}

export default new AlunoController();
