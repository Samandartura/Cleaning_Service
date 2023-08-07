import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './models/skill.model';

@Injectable()
export class SkillsService {
   constructor(@InjectModel(Skill) private readonly skillRepo:typeof Skill){}

  async create(createSkillDto: CreateSkillDto):Promise<Skill> {
    return await this.skillRepo.create(createSkillDto)
  }

  async findAll():Promise<Skill[]> {
    return await this,this.skillRepo.findAll();
  }

  async findOne(id: number):Promise<Skill> {
    return await this.skillRepo.findByPk(id)
  }

  async update(id: number, updateSkillDto1: UpdateSkillDto):Promise<Skill> {
    const skill = await this.skillRepo.update(UpdateSkillDto,{
      where:{id}, returning: true
    })
    return skill[1][0].dataValues
  }

  async remove(id):Promise<number> {
    return await this.skillRepo.destroy(id)
  }
}
