

const photos = [
  {
    src: 'https://th.bing.com/th/id/OIP.jVP6OczLPLThYsv-kACw5gHaE8?w=280&h=187&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 1',
  },
  {
    src: 'https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Description of Photo 2',
  },
  {
    src: 'https://images.pexels.com/photos/6638645/pexels-photo-6638645.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Description of Photo 3',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.si8AWdvP4QlnVtbSHMjhCwHaEH?w=268&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 4',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.A493algRx4HvmByQtViYCQHaHa?w=149&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 5',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.p4zOVKC8V3YKWwAbsp8YZgHaFj?w=199&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 6',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.38c3ijFFSpxGBMzODKXhwQHaE8?w=235&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 7',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.khpVNH8wGazyFCbljojXTAHaEP?w=291&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 8',
  },
  {
    src: 'https://th.bing.com/th/id/OIP.yJWxLNRLQjjBDPH0OoDLqgHaFj?w=240&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 9',
  },{
    src: 'https://th.bing.com/th/id/OIP.CwYWFn9G5iMzyP6scngaMgHaE8?w=241&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 10',
  },{
    src: 'https://th.bing.com/th/id/OIP.o7cDrdLL61u86Wux8PV7RwAAAA?w=241&h=166&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 11',
  },{
    src: 'https://th.bing.com/th/id/OIP.lDvkWkoSMGqfKm762EAIcAHaE8?w=256&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    alt: 'Description of Photo 12',
  },
];

const PhotoGallery = () => (
  <div className="p-8">
    <div className="mb-8">
      <h2 className="text-4xl font-bold">Photo Gallery</h2>
      <div className="mt-4 text-lg">
        Explore photos from our recent events, capturing the vibrant life and activities of our school community.
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {photos.map((photo, index) => (
            <div key={index} className="border rounded overflow-hidden shadow-lg">
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover"/>
              <div className="p-4">
                <p className="text-sm">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default PhotoGallery;
