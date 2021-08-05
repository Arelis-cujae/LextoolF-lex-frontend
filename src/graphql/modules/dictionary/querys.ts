import gql from 'graphql-tag';

export const getDictionaryByIDQuery = gql`
  query getDictionaryByID($dictionaryID: String!) {
    getDictionaryByID(dictionaryID: $dictionaryID) {
      id
      name
      shortName
      author {
        name
        siglas
      }
      annoOfPublication
      reference
      letters
      entries {
        id
        letter
        context
        lemma {
          id
          lemma
          clasification {
            id
            clasification
          }
        }
        UFs {
          id
          UF
          ubication {
            id
            ubication
          }
        }
        sublemmas {
          id
          sublemma
          clasification {
            id
            clasification
          }
        }
      }
    }
  }
`;
