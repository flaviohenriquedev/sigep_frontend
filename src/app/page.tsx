import { modulesRoute } from '@/data/global/Modules';

import { ModuleCard } from '@/components/layout/module';

export default function Home() {
    return (
        <ModuleCard.Container>
            {modulesRoute.map((module) => (
                <ModuleCard.Root key={module.title}>
                    <ModuleCard.Icon icon={module.icon} />
                    <ModuleCard.Info title={module.title} href={module.href} />
                </ModuleCard.Root>
            ))}
        </ModuleCard.Container>
    );
}
