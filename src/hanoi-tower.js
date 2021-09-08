import { NotImplementedError } from '../extensions/index.js';

/*
Рекурсивно решаем задачу «перенести башню из n−1 диска на 2-й штырь». Затем переносим самый большой диск на 3-й штырь, и рекурсивно решаем задачу «перенеси башню из n−1 диска на 3-й штырь».

Отсюда методом математической индукции заключаем, что минимальное число ходов, необходимое для решения головоломки, равно 2^n − 1, где n — число дисков[2][3].

В информатике задачи, основанные на легенде о Ханойской башне, часто рассматривают в качестве примера использования рекурсивных алгоритмов и преобразования их к нерекурсивным.
wikipedia
/*

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber -1;
  const output = { turns : turns, seconds: Math.floor(turns * (3600/turnsSpeed))}
  return {...output}
}
