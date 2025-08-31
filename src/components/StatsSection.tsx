
import React  from 'react';
import {TrendingUp, Users,Target,Award } from  'lucide-react';


const StatsSection = ()=> {
    const stats =[ 
        {
            icon:TrendingUp, 
            value:'99.9%', 
            label:'Uptime',
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
{

            icon:Users, 
            value:'10K+', 
            label:'Active Users', 
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },

{
    icon: Target,
    value:'95%',
    label: 'Accuracy',
    color:'text-purple-600',
    bgColor:'bg-purple-100',
},
{
    icon:Award,
    value:'4,9',
    label:'Rating',
    color:'text-yellow-600',
    bgColor:'bg-yellow-100',
},
    ];
    return (
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat,index)=>(
                <div key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border boder-gray-100"
                >
                    <div className="`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`}/> 
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
            ))}
        </section>
    );
};
export default StatsSection;