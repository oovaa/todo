import mongoose from 'mongoose';
import { User } from './user_schema';

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      default: function () {
        return `task #${this.number}`;
      }
    },
    number: { type: Number },
    content: { type: String },
    done: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const DB_Task = mongoose.model('Tasks', taskSchema);

export { DB_Task };
