import { useState } from 'react';
import { CALENDAR_EVENTS_DATA, INITIAL_TASKS_DATA } from '../../data/portfolioData';
import { CalendarEvent, TaskItem } from '../../types';
import { Calendar, CheckSquare, Clock, Plus, CheckCircle, Circle, AlertCircle } from 'lucide-react';

const DAYS = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function CalendarTaskTracker() {
  const [activeTab, setActiveTab] = useState<'calendar' | 'tasks'>('calendar');
  const [selectedDay, setSelectedDay] = useState<string>('All Days');
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_TASKS_DATA);
  const [priorityFilter, setPriorityFilter] = useState<'All' | 'High' | 'Medium' | 'Low'>('All');

  const filteredEvents = CALENDAR_EVENTS_DATA.filter((evt) => {
    if (selectedDay === 'All Days') return true;
    return evt.day === selectedDay;
  });

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const filteredTasks = tasks.filter((t) => {
    if (priorityFilter === 'All') return true;
    return t.priority === priorityFilter;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs">
      {/* Sample Project Header */}
      <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">
            Sample Project · Executive Schedule &amp; Execution
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-stone-900">
            Weekly Calendar &amp; Task Coordination Tracker
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Designed for small business owners: structured time blocks, buffer periods, and clear daily deliverables.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-stone-200/70 p-1 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('calendar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'calendar'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Weekly Schedule</span>
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'tasks'
                ? 'bg-white text-stone-900 shadow-2xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Task Tracker ({completedCount}/{tasks.length})</span>
          </button>
        </div>
      </div>

      {activeTab === 'calendar' ? (
        <div>
          {/* Day Filter */}
          <div className="px-6 py-3 border-b border-stone-200 bg-white flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-400 mr-2">Filter by Day:</span>
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1 text-xs rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-stone-900 text-white font-medium'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Calendar List View */}
          <div className="divide-y divide-stone-100 p-4 sm:p-6 space-y-3">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-lg border border-stone-100 hover:border-stone-300 hover:bg-stone-50/50 transition-all gap-2"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-20 sm:w-24 shrink-0 text-xs font-semibold text-stone-800">
                    {evt.day}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 tabular-nums shrink-0 w-36">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{evt.time}</span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-stone-900">
                      {evt.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-auto text-xs text-stone-500">
                  <span className="text-stone-600">
                    {evt.type === 'Meeting' && '✦ ' + evt.type}
                    {evt.type === 'Admin Task' && '⚙ ' + evt.type}
                    {evt.type === 'Deadline' && '⏱ ' + evt.type}
                    {evt.type === 'Reminder' && '● ' + evt.type}
                  </span>
                  <span aria-hidden="true" className="text-stone-300">·</span>
                  <span className="font-mono text-stone-400 tabular-nums">{evt.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Priority filter and progress */}
          <div className="px-6 py-3 border-b border-stone-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-stone-500">Priority Filter:</span>
              {(['All', 'High', 'Medium', 'Low'] as const).map((pri) => (
                <button
                  key={pri}
                  onClick={() => setPriorityFilter(pri)}
                  className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                    priorityFilter === pri
                      ? 'bg-stone-900 text-white font-medium'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {pri}
                </button>
              ))}
            </div>

            <div className="text-xs text-stone-500">
              Completion: <span className="font-semibold text-stone-900">{Math.round((completedCount / tasks.length) * 100)}%</span> ({completedCount} of {tasks.length} items completed)
            </div>
          </div>

          {/* Task Checklist */}
          <div className="p-4 sm:p-6 space-y-2">
            {filteredTasks.map((t) => (
              <div
                key={t.id}
                onClick={() => toggleTask(t.id)}
                className={`flex items-start justify-between p-3.5 rounded-lg border cursor-pointer transition-all ${
                  t.completed
                    ? 'bg-stone-50/80 border-stone-200 text-stone-400'
                    : 'bg-white border-stone-200 hover:border-stone-300 hover:shadow-2xs text-stone-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {t.completed ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Circle className="w-4 h-4 text-stone-300 hover:text-stone-500" />
                    )}
                  </div>
                  <div>
                    <div className={`text-xs sm:text-sm font-medium ${t.completed ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                      {t.title}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                      <span>Category: {t.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Due: {t.dueDate}</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono shrink-0 ml-3">
                  <span className={
                    t.priority === 'High'
                      ? 'text-red-700 font-semibold'
                      : t.priority === 'Medium'
                      ? 'text-amber-700'
                      : 'text-stone-500'
                  }>
                    {t.priority} Priority
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span>Click task to toggle completion state in real-time</span>
        <span>Standard VA Operational Protocol</span>
      </div>
    </div>
  );
}
