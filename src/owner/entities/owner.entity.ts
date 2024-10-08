import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pet/entities/pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Pet, (pet) => pet.owner)
  @Field(() => [Pet], { nullable: true })
  pets: [Pet];
}
