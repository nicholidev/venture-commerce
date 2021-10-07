import { Injector } from '../../common/injector';
import { TransactionalConnection } from '../../connection/transactional-connection';
import { Job } from '../job';

import { JobBufferStorageStrategy } from './job-buffer-storage-strategy';

export class SqlJobBufferStorageStrategy implements JobBufferStorageStrategy {
    private connection: TransactionalConnection;

    init(injector: Injector) {
        this.connection = injector.get(TransactionalConnection);
    }

    add(processorId: string, job: Job): Promise<Job> {
        return Promise.resolve(job);
    }

    bufferSize(processorIds?: string[]) {
        return Promise.resolve({});
    }

    flush(processorIds?: string[]) {
        return Promise.resolve({});
    }
}
