import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import { useTarkovStore } from "@/stores/tarkov";
import { computed } from "vue";
import apolloClient from "./apollo";
import gql from "graphql-tag";

// eslint-disable-next-line no-undef
provideApolloClient(apolloClient);

const TarkovDataPlugin = {
  install(app) {
    const tasks = computed(() => {
      const { result } = getTasks();
      return result.value?.tasks;
    });

    const objectives = computed(() => {
      return tasks.value?.reduce(
        (acc, task) => acc.concat(task.objectives),
        []
      );
    });

    const levels = computed(() => {
      const { result } = getLevels();
      return result.value?.playerLevels;
    });

    const maps = computed(() => {
      const { result } = getMaps();
      return result.value?.maps;
    });

    const traders = computed(() => {
      const { result } = getTraders();
      return result.value?.maps;
    });

    const dataLoading = computed(() => {
      const { loading: taskLoading } = getTasks();
      const { loading: levelLoading } = getLevels();
      const { loading: mapLoading } = getMaps();
      const { loading: traderLoading } = getTraders();
      return taskLoading || mapLoading || traderLoading || levelLoading;
    });

    const dataError = computed(() => {
      const { error: taskError } = getTasks();
      const { error: levelError } = getLevels();
      const { error: mapError } = getMaps();
      const { error: traderError } = getTraders();
      return taskError || mapError || traderError || levelError;
    });

    const tarkovStore = useTarkovStore();
    console.log(tarkovStore.storeSelected);
    // Provide data from tarkovdata
    app.provide("tarkov-data", { tasks, objectives, maps, levels, traders, dataLoading, dataError });
  },
};

export { TarkovDataPlugin };

function getTraders() {
  const { result, loading, error } = useQuery(gql`
    query TraderList {
      traders {
        id
        name
        resetTime
        levels {
          id
          level
          requiredPlayerLevel
          requiredReputation
          requiredCommerce
          insuranceRate
          payRate
          repairCostMultiplier
        }
        tarkovDataId
      }
    }
  `);
  return { result, loading, error };
}

function getLevels() {
  const { result, loading, error } = useQuery(gql`
    query LevelList {
      playerLevels {
        level
        exp
      }
    }
  `);
  return { result, loading, error };
}

function getMaps() {
  const { result, loading, error } = useQuery(gql`
    query MapList {
      maps {
        id
        name
        tarkovDataId
        enemies
        wiki
        raidDuration
        players
        description
      }
    }
  `);
  return { result, loading, error };
}

function getTasks() {
  const { result, loading, error } = useQuery(gql`
    query TaskList {
      tasks {
        id
        tarkovDataId
        name
        trader {
          id
          name
        }
        map {
          id
          name
        }
        experience
        wikiLink
        minPlayerLevel
        taskRequirements {
          task {
            id
            name
          }
          status
        }
        traderLevelRequirements {
          trader {
            id
            name
          }
          level
        }
        objectives {
          id
          description
          type
          maps {
            id
            name
          }
          optional
          __typename
          ... on TaskObjectiveBuildItem {
            item {
              id
              name
            }
            containsAll {
              id
              name
            }
            containsOne {
              id
              name
            }
            attributes {
              name
              requirement {
                compareMethod
                value
              }
            }
          }
          ... on TaskObjectiveExperience {
            healthEffect {
              bodyParts
              effects
              time {
                compareMethod
                value
              }
            }
          }
          ... on TaskObjectiveExtract {
            exitStatus
            zoneNames
          }
          ... on TaskObjectiveItem {
            item {
              id
              name
            }
            count
            foundInRaid
            dogTagLevel
            maxDurability
            minDurability
          }
          ... on TaskObjectiveMark {
            markerItem {
              id
              name
            }
          }
          ... on TaskObjectivePlayerLevel {
            playerLevel
          }
          ... on TaskObjectiveQuestItem {
            questItem {
              id
              name
            }
            count
          }
          ... on TaskObjectiveShoot {
            shotType
            target
            count
            zoneNames
            bodyParts
            usingWeapon {
              id
              name
            }
            usingWeaponMods {
              id
              name
            }
            wearing {
              id
              name
            }
            notWearing {
              id
              name
            }
            distance {
              compareMethod
              value
            }
            playerHealthEffect {
              bodyParts
              effects
              time {
                compareMethod
                value
              }
            }
            enemyHealthEffect {
              bodyParts
              effects
              time {
                compareMethod
                value
              }
            }
          }
          ... on TaskObjectiveSkill {
            skillLevel {
              name
              level
            }
          }
          ... on TaskObjectiveTaskStatus {
            task {
              id
              name
            }
            status
          }
          ... on TaskObjectiveTraderLevel {
            trader {
              id
              name
            }
            level
          }
        }
        startRewards {
          traderStanding {
            trader {
              id
              name
            }
            standing
          }
          items {
            count
            item {
              id
              name
              containsItems {
                item {
                  id
                  name
                }
                count
              }
            }
          }
          offerUnlock {
            id
            trader {
              id
              name
            }
            level
            item {
              id
              name
              containsItems {
                count
                item {
                  id
                  name
                }
              }
            }
          }
          skillLevelReward {
            name
            level
          }
          traderUnlock {
            id
            name
          }
        }
        finishRewards {
          traderStanding {
            trader {
              id
              name
            }
            standing
          }
          items {
            count
            item {
              id
              name
              containsItems {
                item {
                  id
                  name
                }
                count
              }
            }
          }
          offerUnlock {
            id
            trader {
              id
              name
            }
            level
            item {
              id
              name
              containsItems {
                count
                item {
                  id
                  name
                }
              }
            }
          }
          skillLevelReward {
            name
            level
          }
          traderUnlock {
            id
            name
          }
        }
        factionName
        neededKeys {
          keys {
            id
            name
          }
          map {
            id
            name
          }
        }
      }
    }
  `);
  return { result, loading, error };
}
