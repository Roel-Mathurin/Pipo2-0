import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FootballInfo: React.FC = () => {
    const [footballData, setFootballData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.fotmob.com/v1/leagues');
                setFootballData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Informations sur le football international</h1>
            <ul>
                {footballData.map((league: any) => (
                    <li key={league.id}>{league.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FootballInfo;