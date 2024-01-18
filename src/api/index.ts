interface Job {
  requirement: {
      education: string;
      experience: string;
      languages: string;
      skills: string[];
  };
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  keyword: string[];
  __v: number;
}

interface SkillFrequency {
    [key: string]: number;
  }
  interface Item {
    keyword?: string[];
  }


const url = 'https://webscraping-4lkq.onrender.com/scraping/'

const api = {
    getAll: async () => {
        const data = await fetch(`${url}get-all-jobs`,
        { cache: 'no-store'})
        .then( res => res.json())
        return data
    },
    getBanner: async () => {
        const { currentDateTime, currentRecords, professionals, data } = await api.getAll();
    
        // Crear un conjunto para almacenar las empresas únicas
        const uniqueCompanies = new Set();    
        // Iterar sobre los datos y agrupar la información por compañía
        data.forEach((job: Job) => {
            const companyName = job.company;
            // Verificar si la compañía ya existe en el conjunto de empresas únicas
            if (!uniqueCompanies.has(companyName)) {
                // Agregar la compañía al conjunto de empresas únicas
                uniqueCompanies.add(companyName);
            }
        });
        // 'uniqueCompanies.size' contiene el número total de empresas sin repetir
        const totalUniqueCompanies = uniqueCompanies.size;

        return { currentDateTime, currentRecords, professionals, totalUniqueCompanies };
    },
    
    getFrecuency: async () => {

        const {data} = await api.getAll()
        // Objeto para almacenar la frecuencia de cada habilidad
        const skillFrequency: SkillFrequency = {};
  
        // Recorre cada trabajo y cuenta la frecuencia de habilidades
        data.forEach((job: Job) => {
            const skills = job.requirement.skills || [];
            skills.forEach(skill => {
            // Convierte la habilidad a minúsculas para evitar diferencias de mayúsculas y minúsculas
            const lowercaseSkill = skill.toLowerCase();
        
            // Incrementa la frecuencia de la habilidad
            if (lowercaseSkill in skillFrequency) {
                skillFrequency[lowercaseSkill]++;
            } else {
                skillFrequency[lowercaseSkill] = 1;
            }
            });
        });
        
        // Convierte el objeto de frecuencia en un array de objetos
        const skillFrequencyArray = Object.keys(skillFrequency)
            .map(skill => ({
            skill,
            cantidad: skillFrequency[skill],
        }))
            // Ordena el array en función de la frecuencia de habilidades de mayor a menor
            .sort((a, b) => b.cantidad - a.cantidad)
            // Toma los primeros 20 elementos
            .slice(0, 20);
        return skillFrequencyArray
        
    },
    getKeywords: async () => {
        const { data } = await api.getAll()
      // Objeto para almacenar la frecuencia de cada habilidad
      const skillFrequency: SkillFrequency = {};
      
      // Recorre cada trabajo y cuenta la frecuencia de habilidades
      data.forEach((item: Item) => {
        const skills = item.keyword || [];
        skills.forEach(keyword => {
          // Convierte la habilidad a minúsculas para evitar diferencias de mayúsculas y minúsculas
          const lowercaseSkill = keyword.toLowerCase();
      
          // Incrementa la frecuencia de la habilidad
          if (lowercaseSkill in skillFrequency) {
            skillFrequency[lowercaseSkill]++;
          } else {
            skillFrequency[lowercaseSkill] = 1;
          }
        });
      });
      
      // Convierte el objeto de frecuencia en un array de objetos
      const skillFrequencyArray = Object.keys(skillFrequency)
        .map(keyword => ({
          keyword,
          cantidad: skillFrequency[keyword],
        }))
        // Ordena el array en función de la frecuencia de habilidades de mayor a menor
        .sort((a, b) => b.cantidad - a.cantidad)
        // Toma los primeros 20 elementos
        .slice(0, 20);

        return skillFrequencyArray
    }
    

}

export default api