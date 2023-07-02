import { Router, Request, Response, NextFunction } from "express";
import { db } from "../db";

const router = Router();

/**
 * Get all trends from the database.
 * @route GET /trends
 */
router.get("/trend", (req, res) => {
  const trends = db.getTrends();

  res.json({ data: trends });
});

/**
 * Get a specific trend by ID.
 * @route GET /trends/:id
 * @param {string} id.path.required - The ID of the trend.
 */
router.get("/trend/:id", (req, res, next) => {
  try {
    const trend = db.getTrend(req.params.id);

    res.status(200);
    res.json({ data: trend });
  } catch (e) {
    next(e);
  }
});

/**
 * Create a new trend.
 * @route POST /trends
 * @param {ITrend} trend.body.required - The trend object to create.
 */
router.post("/trend", (req, res, next) => {
  try {
    const trend = db.createTrend({
      ...req.body,
    });

    res.status(201);
    res.json({ data: trend });
  } catch (e) {
    next(e);
  }
});

/**
 * Update an existing trend.
 * @route PUT /trends/:id
 * @param {string} id.path.required - The ID of the trend to update.
 * @param {ITrend} trend.body.required - The updated trend object.
 */
router.put("/trend/:id", (req, res, next) => {
  try {
    const trend = db.updateTrend({
      id: req.params.id,
      ...req.body,
    });

    res.status(200);
    res.json({ data: trend });
  } catch (e) {
    next(e);
  }
});

/**
 * Delete a trend by ID.
 * @route DELETE /trends/:id
 * @param {string} id.path.required - The ID of the trend to delete.
 */
router.delete("/trend/:id", (req, res, next) => {
  try {
    const trend = db.deleteTrend(req.params.id);

    res.status(200);
    res.json({ data: trend });
  } catch (e) {
    next(e);
  }
});

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.name, err.message);
  return res.status(500).json({
    message: err.message,
  });
});

export default router;
