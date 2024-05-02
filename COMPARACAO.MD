
|                     | REST                                        | RESTful                                    | GraphQL                                    | gRPC                                       |
|---------------------|---------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| **Definição**       | Estilo arquitetural para comunicação entre sistemas distribuídos | API que segue os princípios do REST       | Linguagem de consulta para APIs            | Sistema de chamada de procedimento remoto |
| **Características** | Baseado em recursos e métodos HTTP         | Utiliza URIs e métodos HTTP de forma semântica | Permite consultas flexíveis e eficientes  | Utiliza Protocol Buffers e HTTP/2         |
| **Flexibilidade**   | Não define uma estrutura rígida            | Prioriza a simplicidade e a facilidade de uso | Define um esquema flexível de dados       | Define serviços e mensagens                |
| **Implementação**   | Pode variar de acordo com as necessidades do sistema | Segue as práticas recomendadas do REST    | Requer definição de esquema e consultas   | Define serviços e mensagens em arquivos .proto |
| **Uso de Esquema**  | Não requer um esquema definido previamente | -                                          | Define um esquema de dados                | Define serviços e mensagens em arquivos .proto |
| **Controle sobre dados** | -                                        | -                                          | Permite que os clientes solicitem apenas os dados necessários | -                                          |
| **Comunicação**     | Baseado em requisições HTTP                 | Utiliza URIs e métodos HTTP de forma semântica | Utiliza requisições HTTP                   | Usa HTTP/2 para comunicação eficiente     |
| **Eficiência**      | Depende da implementação                    | -                                          | Reduz o problema de overfetching e underfetching | Comunicação eficiente e de baixa latência |
| **Suporte a Streaming** | -                                     | -                                          | Suporta streaming bidirecional de dados   | Suporta streaming bidirecional de dados   | -->
