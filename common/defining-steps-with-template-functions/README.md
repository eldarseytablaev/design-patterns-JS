# Defining steps with template functions

Это паттерн проектирования, который детализирует порядок, в котором должен выполняться данный набор операций; однако паттерн не описывает сами шаги. Этот паттерн полезен, когда поведение делится на фазы, которые имеют некоторую концептуальную или побочную зависимость, которая требует, чтобы они выполнялись в определенном порядке. Здесь мы увидим, как использовать паттерн проектирования функции шаблона.


## Как это устроено…

Mission Абстрактный класс определяет execute метод, который вызывает другие методы , например , в определенном порядке. Вы заметите, что вызываемые методы не определены  Mission классом. За эту деталь реализации отвечают расширяющие классы. Такое использование абстрактных классов позволяет дочерним классам использоваться кодом, который использует интерфейс, определенный абстрактным классом.

В шаблоне функции шаблона дочерние классы несут ответственность за определение шагов. Когда они создаются и  execute вызывается метод, эти шаги выполняются в указанном порядке.

В идеале мы могли бы гарантировать, что  Mission.execute это не будет переопределено никакими наследующими классами. Переопределение этого метода работает против шаблона и нарушает связанный с ним контракт.

Этот шаблон полезен для организации конвейеров обработки данных. Гарантия того, что эти шаги будут выполняться в заданном порядке, означает, что, если побочные эффекты устранены, экземпляры могут быть организованы более гибко. Затем реализующий класс может организовать эти шаги наилучшим образом.