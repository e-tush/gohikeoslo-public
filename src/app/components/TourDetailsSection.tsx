// src/components/TourDetailsSection.tsx
import {
  Clock,
  CalendarClock,
  MapPin,
  Activity,
  Users,
  ShieldCheck,
} from 'lucide-react';

const details = [
  {
    label: 'Duration',
    value: 'Approximately 2 hours (includes hike, break)',
    icon: <Clock className="text-red-600 w-8 h-8" />,
  },
  {
    label: 'When',
    value: 'Daily tours in English, all weather conditions',
    icon: <CalendarClock className="text-red-600 w-8 h-8" />,
  },
  {
    label: 'Meeting Point',
    value: 'Metro Station, right on the platform',
    icon: <MapPin className="text-red-600 w-8 h-8" />,
  },
  {
    label: 'Fitness Level',
    value:
      'Moderate – suitable for those comfortable walking rough forest terrain',
    icon: <Activity className="text-red-600 w-8 h-8" />,
  },
  {
    label: 'Group Size',
    value:
      'Private or small group tours, up to 10 persons, group discounts available',
    icon: <Users className="text-red-600 w-8 h-8" />,
  },
  {
    label: 'Cancellation',
    value: 'Free cancellation up to 24hrs in advance',
    icon: <ShieldCheck className="text-red-600 w-8 h-8" />,
  },
];

export default function TourDetailsSection() {
  return (
    <section className="goski-section my-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
        About Our Tours
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        {details.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center gap-6`}
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className={`text-center sm:text-left`}>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.label}
                </h3>
                <p className="text-gray-700 text-sm">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
