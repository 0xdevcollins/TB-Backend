import { Request, Response } from 'express';
import AuditLogService from '../services/auditService';

class AuditLogController {
  async getUserAuditLogs(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const { page = 1, limit = 10 } = req.query;

      const data = await AuditLogService.getAuditLogs(userId, Number(page), Number(limit));

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving audit logs', error: error });
    }
  }

  async getAuditLogById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await AuditLogService.getAuditLogById(id);

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving audit logs', error: error });
    }
  }

  async createAuditLog(req: Request, res: Response) {
    try {
      const { userId } = req.body;
      const { action, details } = req.body;

      const data = await AuditLogService.createAuditLog(userId, action, details);

      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving audit logs', error: error });
    }
  }

  async updateAuditLog(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { action, details } = req.body;

      const data = await AuditLogService.updateAuditLog(id, action, details);

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving audit logs', error: error });
    }
  }

  async deleteAuditLog(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await AuditLogService.deleteAuditLog(id);

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving audit logs', error: error });
    }
  }
}

export default new AuditLogController();
