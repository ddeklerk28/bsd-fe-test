/**
 * @file Provides functions to interact with the in-memory database.
 * @module db
 */

import { ITrend, IDBInstance } from '../types';
import seedData from './seed';

/**
 * In-memory database instance.
 * @type {Object}
 * @namespace db
 */
export const db: IDBInstance = (() => {
  let trends: ITrend[] = [...seedData];
  let counter: number = trends.length;

    /**
   * Retrieves all trends from the database.
   * @returns {ITrend[]} An array of trend objects.
   */
  const getTrends = (): ITrend[] => {
    return trends;
  };

  /**
   * Retrieves a specific trend by ID.
   * @param {string} id - The ID of the trend to retrieve.
   * @returns {ITrend} The trend object with the specified ID.
   * @throws {Error} Throws an error if the trend with the specified ID does not exist.
   */
  const getTrend = (id: string): ITrend => {
    const trend = trends.find((trend) => trend.id === id);

    if (!trend) {
      throw new Error(`trend with id: ${id} does not exist`);
    }
    return trend;
  };

  /**
   * Creates a new trend in the database.
   * @param {ITrend} trend - The trend object to create.
   * @returns {ITrend} The newly created trend object, including the assigned ID.
   */
  const createTrend = (trend: ITrend): ITrend => {
    const newTrend = { id: getId(), ...trend };
    trends = [...trends, newTrend];

    return newTrend;
  };

  /**
   * Updates an existing trend in the database.
   * @param {ITrend} trend - The updated trend object.
   * @returns {ITrend} The updated trend object.
   * @throws {Error} Throws an error if the trend with the specified ID does not exist.
   */
  const updateTrend = (trend: ITrend): ITrend => {
    let updatedTrend: ITrend | undefined = undefined;

    trends = trends.map((_trend) => {
      if (trend.id === _trend.id) {
        updatedTrend = {
          ..._trend,
          ...trend,
        };
        return updatedTrend;
      }
      return _trend;
    });

    if (!updatedTrend) {
        throw new Error(`trend with id: ${trend.id} does not exist`);
    }

    return updatedTrend;
  };

  /**
   * Deletes a trend from the database.
   * @param {string} id - The ID of the trend to delete.
   * @returns {ITrend} The deleted trend object.
   * @throws {Error} Throws an error if the trend with the specified ID does not exist.
   */
  const deleteTrend = (id: string): ITrend => {
    let deletedTrend: ITrend | undefined = undefined;

    trends = trends.filter((_trend) => {
        if (_trend.id === id) {
            deletedTrend = _trend;
            return false;
        }
        return true;
    });

    if (!deletedTrend) {
        throw new Error(`trend with id: ${id} does not exist`);
    }

    return deletedTrend;
  }

  // Helper functions

  /**
   * Generates a new ID for a trend.
   * @returns {string} The generated ID.
   */
  const getId = (): string => {
    return String(++counter);
  };

  return {
    getTrends,
    getTrend,
    createTrend,
    updateTrend,
    deleteTrend,
  };
})();
