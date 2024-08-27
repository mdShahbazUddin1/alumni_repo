document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "http://localhost:3000";
  const PAGE_SIZE = 10;
  let currentPage = 1;
  let teams = [];
  let players = [];

  const fetchTeams = async () => {
    const response = await fetch(`${API_URL}/teams`);
    teams = await response.json();
    populateTeamFilter();
  };

  const fetchPlayers = async () => {
    const response = await fetch(`${API_URL}/players`);
    players = await response.json();
    displayTopPlayer();
    displayPlayers();
  };

  const populateTeamFilter = () => {
    const teamFilter = document.getElementById("team-filter");
    teams.forEach((team) => {
      const option = document.createElement("option");
      option.value = team.teamCode;
      option.textContent = team.teamCode;
      teamFilter.appendChild(option);
    });
  };

  const displayPlayers = () => {
    const playerTableBody = document.querySelector("#player-table tbody");
    playerTableBody.innerHTML = "";

    const filteredPlayers = getFilteredPlayers();
    const sortedPlayers = getSortedPlayers(filteredPlayers);
    const paginatedPlayers = getPaginatedPlayers(sortedPlayers);

    paginatedPlayers.forEach((player, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${(currentPage - 1) * PAGE_SIZE + index + 1}</td>
                <td>
                    <img src="https://scores.iplt20.com/ipl/playerimages/${
                      player.name
                    }.png?v=4" alt="${
        player.name
      }" style="width: 50px; height: 50px;">
                    ${player.name}
                </td>
                <td>
                    ${
                      teams.find((team) => team.teamCode === player.team)
                        ?.teamLogo
                        ? `<img src="${
                            teams.find((team) => team.teamCode === player.team)
                              .teamLogo
                          }" alt="${
                            player.team
                          }" style="width: 50px; height: 50px;">`
                        : player.team
                    }
                </td>
                <td>${player.totalRuns}</td>
                <td>${player.fours}</td>
                <td>${player.sixes}</td>
                <td>${player.strikeRate}</td>
                <td>${player.fiftyPlusRuns}</td>
                <td>${player.centuries}</td>
            `;
      playerTableBody.appendChild(row);
    });
  };

  const getFilteredPlayers = () => {
    const teamFilter = document.getElementById("team-filter").value;
    return players.filter(
      (player) => teamFilter === "" || player.team === teamFilter
    );
  };

  const getSortedPlayers = (players) => {
    return players.sort((a, b) => b.totalRuns - a.totalRuns); // Default sort by totalRuns
  };

  const getPaginatedPlayers = (players) => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return players.slice(start, start + PAGE_SIZE);
  };

  const displayTopPlayer = () => {
    const topPlayer = getSortedPlayers(players)[0];
    if (topPlayer) {
      document.getElementById("top-player").innerHTML = `
                <h2>Top Player: ${topPlayer.name}</h2>
                <img src="https://scores.iplt20.com/ipl/playerimages/${topPlayer.name}.png?v=4" alt="${topPlayer.name}" style="width: 100px; height: 100px;">
                <p>Total Runs: ${topPlayer.totalRuns}</p>
            `;
    }
  };

  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayPlayers();
    }
  });

  document.getElementById("next-page").addEventListener("click", () => {
    if (
      (currentPage - 1) * PAGE_SIZE + PAGE_SIZE <
      getSortedPlayers(players).length
    ) {
      currentPage++;
      displayPlayers();
    }
  });

  document.getElementById("team-filter").addEventListener("change", () => {
    displayPlayers();
    displayTopPlayer();
  });

  fetchTeams();
  fetchPlayers();
});
