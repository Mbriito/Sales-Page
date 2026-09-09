
import React from 'react';
import { UserCheck, Zap, BookOpen, Clock, Users } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const targetItems = [
    { title: "Pastores e líderes", icon: <UserCheck className="w-6 h-6" /> },
    { title: "Pregadores que precisam de apoio", icon: <Zap className="w-6 h-6" /> },
    { title: "Quem quer mensagens profundas e organizadas", icon: <BookOpen className="w-6 h-6" /> },
    { title: "Quem quer economizar tempo", icon: <Clock className="w-6 h-6" /> },
    { title: "Quem quer edificar a igreja", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 serif">Para quem é este ebook?</h2>
          <div className="w-24 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {targetItems.map((item, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 text-center hover:bg-teal-600 hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-teal-600/20">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 group-hover:bg-white/20 transition-all">
                <div className="text-teal-600 group-hover:text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 group-hover:text-white leading-tight">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
