export const sortedUserByName = (datas) => {
    function getRanks(data) {
        return data
            .slice()
            .sort((a, b) => b.grade - a.grade)
            .map((user, index) => ({ ...user, rank: index + 1 }));
    }
    
    const sortedUsersByGradeWithRank = getRanks(datas);
    
    const sortedUsersByName = sortedUsersByGradeWithRank
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
    
    return sortedUsersByName
}


